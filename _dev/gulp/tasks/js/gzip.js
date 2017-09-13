'use strict';

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('js:gzip', ['js:gzip:global', 'js:gzip:components'], function (cb) {
    if (settings.debug) {
      console.log('js:gzip task...');
    }

    cb();
  });

  gulp.task('js:gzip:global', function (cb) {
    if (settings.debug) {
      console.log('js:gzip:global task...');
    }

    return gulp.src(settings.files.dev.js)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.gzip())
      .pipe(gulp.dest(settings.path.theme.js));
  });

  gulp.task('js:gzip:components', function (cb) {
    if (settings.debug) {
      console.log('js:gzip:components task...');
    }

    return gulp.src(settings.path.theme.templates + '/**/*.js')
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.gzip())
      .pipe(gulp.dest(settings.path.theme.templates));
  });
};
