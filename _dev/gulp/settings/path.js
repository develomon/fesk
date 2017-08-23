'use strict';

var path = require('path');

var rootPath = {
  dev: path.resolve(__dirname, '../../'),
  tmp: path.resolve(__dirname, '../../.tmp/'),
  theme: path.resolve(__dirname, '../../../')
};

module.exports = {
  dev: {
    css: path.resolve(rootPath.dev, './assets/css'),
    sass: path.resolve(rootPath.dev, './assets/sass'),
    js: path.resolve(rootPath.dev, './assets/js'),
    images: path.resolve(rootPath.dev, './assets/images'),
    svg: path.resolve(rootPath.dev, './assets/svg'),
    fonts: path.resolve(rootPath.dev, './assets/fonts')
  },
  theme: {
    css: path.resolve(rootPath.theme, './assets/stylesheets'),
    fonts: path.resolve(rootPath.theme, './assets/fonts'),
    images: path.resolve(rootPath.theme, './assets/images'),
    js: path.resolve(rootPath.theme, './assets/scripts'),
    svg: path.resolve(rootPath.theme, './assets/images/svg')
  }
};
