'use strict';

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('js:minify', function (cb) {
    if (settings.debug) {
      console.log('js:minify task...');
    }

    return gulp.src(settings.files.dev.js)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.uglify())
      .pipe(gulp.dest(settings.path.theme.js));
  });
};
