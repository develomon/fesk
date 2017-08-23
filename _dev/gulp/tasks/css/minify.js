'use strict';

var minify = require('postcss-clean');
var autoprefixer = require('autoprefixer');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('css:minify', function (cb) {
    if (settings.debug) {
      console.log('css:minify task...');
    }

    return gulp.src(settings.files.css)
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
};
