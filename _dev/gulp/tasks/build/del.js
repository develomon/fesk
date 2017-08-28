'use strict';

var del = require('del');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('build:del:tmp', function (cb) {
    if (settings.debug) {
      console.log('build:del:tmp task...');
    }

    var deldir = function (err) {
      if (err) return cb(err);
      del([
        settings.path.tmp._self,
      ], {
        force: true
      });
      cb();
    };

    return deldir();
  });
};
