'use strict';

var pathSettings = require('./path.js');

module.exports = {
  scss: [
    pathSettings.dev.sass + '/**/*.scss'
    // '!' + pathSettings.sass + '/**/_*.scss'
  ],
  css: [pathSettings.dev.css + '/**/*.css'],
  js: [pathSettings.dev.js + '/**/*.js'],
  svg: [pathSettings.dev.svg + '/**/*.svg'],

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
  },

  tmp: {
    css: [pathSettings.tmp.css + '/**/*.css'],
    sass: [pathSettings.tmp.sass + '/**/*.sass'],
    js: [pathSettings.tmp.js + '/**/*.js'],
    images: [
      pathSettings.tmp.images + '/**/*.png',
      pathSettings.tmp.images + '/**/*.jpg'
    ],
    svg: [pathSettings.tmp.svg + '/**/*.svg'],
    fonts: [
      pathSettings.tmp.fonts + '/**/*.eot',
      pathSettings.tmp.fonts + '/**/*.ttf',
      pathSettings.tmp.fonts + '/**/*.woff',
      pathSettings.tmp.fonts + '/**/*.woff2'
    ]
  }

  // pattern_lab: [
  //   options.rootPath.pattern_lab + '**/*.json',
  //   options.rootPath.pattern_lab + '**/*.twig'
  // ]
};
