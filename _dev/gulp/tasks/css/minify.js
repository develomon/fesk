'use strict';

var minify = require('postcss-clean');
var autoprefixer = require('autoprefixer');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('css:minify', ['css:minify:global', 'css:minify:components'], function (cb) {
    if (settings.debug) {
      console.log('css:minify task...');
    }

    cb();
  });

  gulp.task('css:minify:global', function (cb) {
    if (settings.debug) {
      console.log('css:minify:global task...');
    }

    return gulp.src(settings.files.dev.css)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.postcss([
        autoprefixer,
        minify
      ]))
      .pipe(plugins.rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(settings.path.theme.css));
  });

  gulp.task('css:minify:components', function (cb) {
    if (settings.debug) {
      console.log('css:minify:components task...');
    }

    return gulp.src(settings.files.pattern_lab.patterns.css)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.postcss([
        autoprefixer,
        minify
      ]))
      .pipe(plugins.rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(settings.path.theme.templates));
  });
};
