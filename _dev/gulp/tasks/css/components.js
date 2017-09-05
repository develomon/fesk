'use strict';

var autoprefixer = require('autoprefixer');
var postcssSVG = require('postcss-svg');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('css:components', function (cb) {

    if (settings.debug) {
      console.log('css:components task...');
    }

    const conf = {
      postcssSVG: {
        dirs: [settings.path.tmp.svg + '/source'],
        utf8: true // Set this to `false` if you want Base64 encoded string out of SVG file's content.
      }
    };

    return gulp.src(settings.files.pattern_lab.patterns.css)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.postcss([
        postcssSVG(conf.postcssSVG),
        autoprefixer
      ]))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(settings.path.theme.templates));
  });
};
