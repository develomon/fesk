'use strict';

var del = require('del');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('svg:min', ['svg:del'], function (cb) {

    if (settings.debug) {
      console.log('svg:min task...');
    }

    // @todo: Test result of each file in different conditions, and if needed add more plugins.
    const conf = {
      plugins: [
        {
          removeTitle: true
        },
        {
          removeAttrs: {
            attrs: 'fill'
          }
        },
        {
          convertColors: {
            names2hex: true,
            rgb2hex: true
          }
        }
      ]
    };

    return gulp.src(settings.files.dev.svg)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.svgmin(conf)).on('error', function (error) {
        console.error(error);
      })
      .pipe(gulp.dest(settings.path.tmp.svg + '/source'));
  });
};
