'use strict';

var del = require('del');
var run = require('run-sequence');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('font:webfontloader:copy', function (cb) {
    if (settings.debug) {
      console.log('webfontloader:copy task...');
    }

    gulp.src(settings.path.dev.node_modules + '/webfontloader/**/*')
      .pipe(gulp.dest(settings.path.dev.js + '/webfontloader/'));

    cb();
  });

  gulp.task('font:webfontloader:del', function (cb) {
    if (settings.debug) {
      console.log('webfontloader:del task...');
    }

    var deldir = function (err) {
      if (err) return cb(err);
      del([
        settings.path.dev.js + '/webfontloader/'
      ], {
        force: true
      });
      cb();
    };

    return deldir();
  });

  gulp.task('font:webfontloader:recreate', function (cb) {
    if (settings.debug) {
      console.log('webfontloader:recreate task...');
    }

    run(
      // 'font:webfontloader:del',
      'font:webfontloader:copy',
      cb
    );
  });
};
