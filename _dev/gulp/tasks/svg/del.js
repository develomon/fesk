'use strict';

var fs = require('fs');
var del = require('del');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('svg:del', function (cb) {
    if (settings.debug) {
      console.log('svg:del task...');
    }

    var deldir = function (err) {
      if (err) return cb(err);
      del([
        settings.path.tmp.svg + '/*',
        settings.path.theme.svg + '/*'
      ], {
        force: true
      });
      cb();
    };

    return deldir();
  });
};
