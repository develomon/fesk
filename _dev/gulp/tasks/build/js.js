'use strict';

var run = require('run-sequence');

module.exports = function (gulp, plugins, settings, handlers) {
  // Development
  gulp.task('build:js:development', function (cb) {
    if (settings.debug) {
      console.log('build:js:development task...');
    }

    run(
      'js:del',               // Remove all JS files.
      [
        'js:minify',          // Compile global JS files.
        'js:components'       // Compile components JS files.
      ],
      cb
    );
  });

  // Production
  gulp.task('build:js:production', function (cb) {
    if (settings.debug) {
      console.log('build:js:production task...');
    }

    run(
      'js:del',              // Remove all JS files.
      [
        'js:minify',         // Compile global JS files.
        'js:components'      // Compile components JS files.
      ],
      'js:gzip',             // Make .js.gz files (browser search for them automatically).
      cb
    );
  });
};
