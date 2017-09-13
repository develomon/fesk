'use strict';

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('css:gzip', ['css:gzip:global', 'css:gzip:components'], function (cb) {
    if (settings.debug) {
      console.log('css:gzip task...');
    }

    cb();
  });

  gulp.task('css:gzip:global', function (cb) {
    if (settings.debug) {
      console.log('css:gzip:global task...');
    }

    return gulp.src(settings.path.theme.css + '/**/*.css')
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.gzip())
      .pipe(gulp.dest(settings.path.theme.css));
  });

  gulp.task('css:gzip:components', function (cb) {
    if (settings.debug) {
      console.log('css:gzip:components task...');
    }

    return gulp.src(settings.path.theme.templates + '/**/*.css')
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.gzip())
      .pipe(gulp.dest(settings.path.theme.templates));
  });
};
