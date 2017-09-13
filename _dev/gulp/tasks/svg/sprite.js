'use strict';

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('svg:sprite', ['svg:min'], function (cb) {
    if (settings.debug) {
      console.log('svg:sprite task...');
    }

    const config = {
      mode: {
        symbol: { // symbol mode to build the SVG
          render: {
            css: true, // CSS output option for icon sizing
            scss: true // SCSS output option for icon sizing
          },
          dest: 'sprite', // destination folder
          prefix: '.svg--%s', // BEM-style prefix if styles rendered
          sprite: 'sprite.svg', //generated sprite name
          example: true // Build a sample page, please!
        }
      }
    };

    // const config = {1
    //   shape: {
    //     dimension: { // Set maximum dimensions
    //       maxWidth: 32,
    //       maxHeight: 32
    //     },
    //     spacing: { // Add padding
    //       padding: 10
    //     },
    //     dest: 'out/intermediate-svg' // Keep the intermediate files
    //   },
    //   mode: {
    //     view: { // Activate the «view» mode
    //       bust: false,
    //       render: {
    //         scss: true // Activate Sass output (with default options)
    //       }
    //     },
    //     symbol: true // Activate the «symbol» mode
    //   }
    // };

    return gulp.src(settings.path.tmp.svg + '/source/**/*.svg')
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.svgSprite(config)).on('error', function(error){
        console.log('Error: ', error);
      })
      .pipe(gulp.dest(settings.path.theme.svg));
  });
};
