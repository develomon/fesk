'use strict';

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('css:gzip', function (cb) {
    if (settings.debug) {
      console.log('css:gzip task...');
    }

    return gulp.src(settings.path.theme.css + '/**/*.css')
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.gzip())
      .pipe(gulp.dest(settings.path.theme.css));
  });
};
