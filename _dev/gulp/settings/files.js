'use strict';

var settings = {
  path: require('./path.js')
};

module.exports = {
  dev: {
    scss: [settings.path.dev.sass + '/**/*.scss'],
    css: [settings.path.dev.css + '/**/*.css'],
    js: [settings.path.dev.js + '/**/*.js'],
    svg: [settings.path.dev.svg + '/**/*.svg']
  },

  public: {
    css: [settings.path.theme.css + '/**/*.css'],
    fonts: [
      settings.path.theme.fonts + '/**/*.eot',
      settings.path.theme.fonts + '/**/*.ttf',
      settings.path.theme.fonts + '/**/*.woff',
      settings.path.theme.fonts + '/**/*.woff2'
    ],
    images: [
      settings.path.theme.images + '/**/*.png',
      settings.path.theme.images + '/**/*.jpg'
    ],
    js: [settings.path.theme.js + '/**/*.js'],
    svg: [settings.path.theme.svg + '/**/*.svg']
  },

  tmp: {
    css: [settings.path.tmp.css + '/**/*.css'],
    sass: [settings.path.tmp.sass + '/**/*.sass'],
    js: [settings.path.tmp.js + '/**/*.js'],
    images: [
      settings.path.tmp.images + '/**/*.png',
      settings.path.tmp.images + '/**/*.jpg'
    ],
    svg: [settings.path.tmp.svg + '/**/*.svg'],
    fonts: [
      settings.path.tmp.fonts + '/**/*.eot',
      settings.path.tmp.fonts + '/**/*.ttf',
      settings.path.tmp.fonts + '/**/*.woff',
      settings.path.tmp.fonts + '/**/*.woff2'
    ]
  },

  pattern_lab: {
    css: [settings.path.pattern_lab.css + '/**/*.css'],
    sass: [settings.path.pattern_lab.sass + '/**/*.scss'],
    patterns: {
      css: [settings.path.pattern_lab.patterns + '/**/*.css'],
      sass: [settings.path.pattern_lab.patterns + '/**/*.scss'],
      js: [settings.path.pattern_lab.patterns + '/**/*.js']
    }
  }
};
