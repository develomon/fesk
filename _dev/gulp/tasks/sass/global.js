'use strict';

var importOnce = require('node-sass-import-once');

module.exports = function(gulp, plugins, settings, handlers, cb) {
  gulp.task('sass:global', function (cb) {
    if (settings.debug) {
      console.log('sass:global task...');
    }

    const conf = {
      sass: {
        importer: importOnce,
        importOnce: {
          init: true
        },
        outputStyle: 'expanded'
      },

      sassGlob: {
        ignorePaths: []
      }
    };

    return gulp.src(settings.files.dev.scss)
      .pipe(plugins.plumber({ errorHandler: handlers.error }))
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.sassGlob(conf.sassGlob))
      .pipe(plugins.sass(conf.sass))
      .pipe(plugins.sourcemaps.write('./', {sourceRoot: '../../_dev/assets/sass'}))
      .pipe(gulp.dest(settings.path.dev.css));
  });
};
