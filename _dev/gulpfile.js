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

// (Ordered: A-Z[GROUP|NAME]) ||  COMMANDS
// Build
getTask('build', 'css');     // $ gulp build:css:development; $ gulp build:css:production
// CSS
getTask('css', 'del');       // $ gulp css:del
getTask('css', 'global');    // $ gulp css:global
getTask('css', 'gzip');      // $ gulp css:gzip
getTask('css', 'minify');    // $ gulp css:minify
// Notifications
getTask('notifications', 'build');
// SASS
getTask('sass', 'global');   // $ gulp sass:global

/**
 * Watch tasks.
 */

gulp.task('watch', function (cb) {
  gulp.watch([settings.files.scss, settings.files.css], ['build:css:development']);
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
