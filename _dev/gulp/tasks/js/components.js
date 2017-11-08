'use strict';

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('js:components', ['js:wrap'],function (cb) {

    if (settings.debug) {
      console.log('js:components task...');
    }

    if (settings.cms === 'drupal') {
      var source = settings.files.tmp.js.drupal;
    } else if (settings.cms === 'static') {
      var source = settings.files.tmp.js.static;
    }

    return gulp.src(source)
      .pipe(plugins.plumber({errorHandler: handlers.error}))
      // .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.uglify())
      // .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(settings.path.theme.templates));
  });
};
