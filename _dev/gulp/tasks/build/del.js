'use strict';

var del = require('del');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('build:del', ['build:del:tmp', 'build:del:assets'], function (cb) {
    if (settings.debug) {
      console.log('build:del:tmp task...');
    }

    cb();
  });

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

  gulp.task('build:del:assets', function (cb) {
    if (settings.debug) {
      console.log('build:del:assets task...');
    }

    var deldir = function (err) {
      if (err) return cb(err);
      del([
        settings.path.theme.css + '/*',
        settings.path.theme.fonts + '/*',
        settings.path.theme.images + '/*',
        settings.path.theme.js + '/*'
      ], {
        force: true
      });
      cb();
    };

    return deldir();
  });

  gulp.task('build:del:templates', function (cb) {
    if (settings.debug) {
      console.log('build:del:templates task...');
    }

    var deldir = function (err) {
      if (err) return cb(err);
      del([
        settings.path.theme.templates + '/**/*.css',
        settings.path.theme.templates + '/**/*.gz',
        settings.path.theme.templates + '/**/*.js',
        settings.path.theme.templates + '/**/*.map'
      ], {
        force: true
      });
      cb();
    };

    return deldir();
  });
};
