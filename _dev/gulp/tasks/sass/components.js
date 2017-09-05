'use strict';

module.exports = function(gulp, plugins, settings, handlers, cb) {
  gulp.task('sass:components', function (cb) {
    if (settings.debug) {
      console.log('sass:components task...');
    }

    const conf = {
      sass: {
        importer: plugins.sassImportOnce,
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
