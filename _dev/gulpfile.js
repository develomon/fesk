'use strict';

/**
 * Load modules.
 */

var gulp = require('gulp');
var path = require('path');
var plugins = require('gulp-load-plugins')();
var requireDir = require('require-dir');

/**
 * Settings.
 */

var settings = {
  dir: requireDir(path.resolve(__dirname, './gulp/settings')),
  files: require(path.resolve(__dirname, './gulp/settings/files.js')),
  path: require(path.resolve(__dirname, './gulp/settings/path.js')),
  debug: true
};

/**
 * Handlers.
 */

var handlers = {
  error: require(path.resolve(__dirname, './gulp/handlers/error.js'))
};

/**
 * Helper functions.
 */

// Load tasks from file: ./gulp/tasks/[GROUP]/[NAME].js
function getTask(group, name) {
  return require(path.resolve(__dirname, './gulp/tasks/' + group + '/' + name + '.js'))(gulp, plugins, settings, handlers);
}

/**
 * Tasks.
 */

// (Ordered: A-Z[GROUP|NAME])      ||   COMMANDS
// Build
getTask('build', 'css');           // $ gulp build:css:development; $ gulp build:css:production
getTask('build', 'del');           // $ gulp build:del; $ gulp build:del:tmp; $ gulp build:del:assets
getTask('build', 'js');            // $ gulp build:js:development; $ gulp build:js:production
// CSS
getTask('css', 'components');      // $ gulp css:components
getTask('css', 'del');             // $ gulp css:del
getTask('css', 'global');          // $ gulp css:global
getTask('css', 'gzip');            // $ gulp css:gzip
getTask('css', 'minify');          // $ gulp css:minify; $ gulp css:minify:global; $ gulp css:minify:components
// Images
getTask('img', 'sprite');          // $ gulp img:sprite
// JS
getTask('js', 'components');       // $ gulp js:components
getTask('js', 'del');              // $ gulp js:del
getTask('js', 'gzip');             // $ gulp js:gzip; $ gulp js:gzip:global; $ gulp js:gzip:components
getTask('js', 'minify');           // $ gulp js:minify
// Notifications
getTask('notifications', 'build'); // $ gulp notifications:build
// Pattern Lab
getTask('pattern-lab', 'sass');    // $ gulp pattern-lab:sass
// SASS
getTask('sass', 'components');     // $ gulp sass:components
getTask('sass', 'global');         // $ gulp sass:global
// SVG
getTask('svg', 'del');             // $ gulp svg:del
getTask('svg', 'min');             // $ gulp svg:min
getTask('svg', 'sprite');          // $ gulp svg:sprite

/**
 * Watch tasks.
 */

gulp.task('watch', function (cb) {
  // Watch SASS/CSS files (global and components).
  gulp.watch([
    settings.files.dev.scss,
    settings.files.dev.css,
    settings.files.pattern_lab.patterns.sass,
    settings.files.pattern_lab.patterns.css
  ], ['build:css:development']);

  // Watch JS files (global and components).
  gulp.watch([
    settings.files.dev.js,
    settings.files.pattern_lab.patterns.js
  ], ['build:js:development']);
});

/**
 * Helper tasks.
 */

gulp.task('test', function () {
  console.log('test task...');
});

gulp.task('default', function () {
  console.log('gulp run...');
});
