'use strict';

module.exports = function(gulp, plugins, settings, handlers, cb) {
  gulp.task('pattern-lab:sass', function (cb) {
    if (settings.debug) {
      console.log('pattern-lab:sass task...');
    }

    const conf = {
      sass: {
        importer: plugins.sassImportOnce,
        // src: settings.path.dev.sass,
        // dest: settings.path.dev.css,
        // includePaths: [
        //   settings.path.dev.sass
        // ],
        outputStyle: 'expanded'
      },

      sassGlob: {
        ignorePaths: []
      }
    };

    return gulp.src(settings.files.pattern_lab.sass)
      .pipe(plugins.plumber({ errorHandler: handlers.error }))
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.sassGlob(conf.sassGlob))
      .pipe(plugins.sass(conf.sass))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(settings.path.pattern_lab.css));
  });
};
