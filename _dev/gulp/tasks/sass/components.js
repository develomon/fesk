'use strict';

var importOnce = require('node-sass-import-once');
var path = require('path');

module.exports = function(gulp, plugins, settings, handlers, cb) {
  gulp.task('sass:components', function (cb) {
    if (settings.debug) {
      console.log('sass:components task...');
    }

    const conf = {
      sass: {
        importer: importOnce,
        importOnce: {
          // index: true
        },
        includePaths: [
          settings.path.dev.sass
        ],
        outputStyle: 'expanded'
      },

      sassGlob: {
        ignorePaths: []
      }
    };

    return gulp.src(settings.files.pattern_lab.patterns.sass)
      .pipe(plugins.plumber({ errorHandler: handlers.error }))
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.sassGlob(conf.sassGlob))
      .pipe(plugins.sass(conf.sass))
      .pipe(plugins.sourcemaps.write('./')) // @todo: Add proper SCSS source to the map.
      .pipe(gulp.dest(settings.path.pattern_lab.patterns));
  });
};
