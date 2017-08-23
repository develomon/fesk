'use strict';

var run = require('run-sequence');

module.exports = function (gulp, plugins, settings, handlers) {
  // Development
  gulp.task('build:css:development', function (cb) {
    if (settings.debug) {
      console.log('build:css:development task...');
    }

    run(
      'css:del',
      'sass:global',
      'css:global',
      'notifications:build',
      cb
    );
  });

  // Production
  gulp.task('build:css:production', function (cb) {
    if (settings.debug) {
      console.log('build:css:production task...');
    }

    run(
      'css:del',
      'sass:global',
      'css:global',
      'css:minify',
      'css:gzip',
      'notifications:build',
      cb
    );
  });
};
