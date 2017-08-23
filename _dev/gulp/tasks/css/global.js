'use strict';

var autoprefixer = require('autoprefixer');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('css:global', function (cb) {

    if (settings.debug) {
      console.log('css:global task...');
    }

    return gulp.src(settings.files.css)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.postcss([
        autoprefixer
      ]))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(settings.path.theme.css));
  });
};
