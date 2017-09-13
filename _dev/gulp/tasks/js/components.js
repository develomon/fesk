'use strict';

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('js:components', function (cb) {

    if (settings.debug) {
      console.log('js:components task...');
    }

    return gulp.src(settings.files.pattern_lab.patterns.js)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      // .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.uglify())
      // .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(settings.path.theme.templates));
  });
};
