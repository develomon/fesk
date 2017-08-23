'use strict';

var notifier = require('node-notifier');
var path = require('path');
var notifierIcon = path.resolve(__dirname, './notifier-icon.png');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('notifications:build', function (cb) {
    if (settings.debug) {
      console.log('notifications:build task...');
    }

    notifier.notify({
      title: "Gulp",
      subtitle: "Success!",
      message: "Build successfully finished!",
      icon: notifierIcon
    });
    cb();
  });
};
