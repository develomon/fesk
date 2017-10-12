'use strict';

var path = require('path');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('js:load', function (cb) {
    if (settings.debug) {
      console.log('js:load task...');
    }

    return gulp.src([
      path.resolve(settings.path.dev.node_modules, './webfontloader') + '/**/*'
    ])
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      .pipe(gulp.dest(settings.path.theme.js + '/webfontloader'));
  });
};
