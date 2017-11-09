'use strict';

var inject = require("gulp-inject");
var foreach = require('gulp-foreach');
var rename = require('gulp-rename');
var path = require('path');

module.exports = function (gulp, plugins, settings, handlers) {

  gulp.task('js:wrap', function () {

    if (settings.cms === 'drupal') {

      // Drupal
      return gulp.src(settings.files.pattern_lab.patterns.js)
        .pipe(foreach(function (stream, file) {

          // Take js file path.
          var filePath = file.path;

          // Split file path.
          var filePathSplit = filePath.split('/');
          // Remove all elements but last two.
          var filePathData = filePathSplit.slice(Math.max(filePathSplit.length - 2, 1));
          // Join what was left.
          var pattern = filePathData.join('/');

          // Take wrapper js.
          var wrapper = settings.path.dev.js + '/behavior-wrap.js';

          // Inject js content into wrapper
          return gulp.src(wrapper)
            .pipe(inject(gulp.src(filePath), {
              starttag: '<!-- inject:jQuery -->',
              transform: function (filePath, file) {
                return file.contents.toString();
              }
            }))
            // Rename file.
            .pipe(rename(function (path) {
              path.basename = pattern;
            }))
            // Save as output js file.
            .pipe(gulp.dest(settings.path.tmp.js + '/drupal'));
        }))
    }

    else if (settings.cms === 'static') {

      // Static
      return gulp.src(settings.files.pattern_lab.patterns.js)
        .pipe(foreach(function (stream, file) {

          // Take js file path.
          var filePath = file.path;

          // Split file path.
          var filePathSplit = filePath.split('/');
          // Remove all elements but last two.
          var filePathData = filePathSplit.slice(Math.max(filePathSplit.length - 2, 1));
          // Join what was left.
          var pattern = filePathData.join('/');
          // Take wrapper js.
          var wrapper = settings.path.dev.js + '/jquery-wrap.js';

          // Inject js content into wrapper
          return gulp.src(wrapper)
            .pipe(inject(gulp.src(filePath), {
              starttag: '<!-- inject:jQuery -->',
              transform: function (filePath, file) {
                return file.contents.toString();
              }
            }))
            // Rename file.
            .pipe(rename(function (path) {
              path.basename = pattern;
            }))
            // Save as output js file.
            .pipe(gulp.dest(settings.path.tmp.js + '/static'));
        }))
    }
  });
};
