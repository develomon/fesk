'use strict';

var buffer = require('vinyl-buffer');
var merge = require('merge-stream');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('img:sprite', function (cb) {
    if (settings.debug) {
      console.log('img:sprite task...');
    }

    var spriteData = gulp.src(settings.path.dev.images + '/*.png')
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.spritesmith({
        retinaSrcFilter: [settings.path.dev.images + '/*@2x.png'],
        imgName: 'sprite.png',
        retinaImgName: 'sprite@2x.png',
        cssName: '_sprite.scss',
        cssFormat: 'scss',
        // imgPath: '../images/sprite.png',
        algorithm: 'top-down',
        padding: 10
      }));
    spriteData.css.pipe(gulp.dest(settings.path.dev.sass));

    // Pipe image stream through image optimizer and onto disk
    var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
      .pipe(buffer())
      .pipe(plugins.imagemin([
        plugins.imagemin.optipng({optimizationLevel: 5})
      ]))
      .pipe(gulp.dest(settings.path.tmp.images + '/sprite'));

    function ret() {
      merge(imgStream, spriteData);
      cb();
    }

    // Return a merged stream to handle both `end` events
    return ret();
  });
};
