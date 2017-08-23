'use strict';

var pathSettings = require('./path.js');

module.exports = {
  scss: [
    pathSettings.dev.sass + '/**/*.scss'
    // '!' + pathSettings.sass + '/**/_*.scss'
  ],
  css: [pathSettings.dev.css + '/**/*.css'],
  js: [pathSettings.dev.js + '/**/*.js'],
  svg: [pathSettings.dev.svg],
  public: {
    css: [pathSettings.theme.css + '/**/*.css'],
    fonts: [
      pathSettings.theme.fonts + '/**/*.eot',
      pathSettings.theme.fonts + '/**/*.ttf',
      pathSettings.theme.fonts + '/**/*.woff',
      pathSettings.theme.fonts + '/**/*.woff2'
    ],
    images: [
      pathSettings.theme.images + '/**/*.png',
      pathSettings.theme.images + '/**/*.jpg'
    ],
    js: [pathSettings.theme.js + '/**/*.js'],
    svg: [pathSettings.theme.svg + '/**/*.svg']
  }
  // pattern_lab: [
  //   options.rootPath.pattern_lab + '**/*.json',
  //   options.rootPath.pattern_lab + '**/*.twig'
  // ]
};
