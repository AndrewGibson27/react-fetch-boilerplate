var path = require('path');

var publicDirName = 'public',
  webpackClientBuildDirPath = path.join(__dirname, publicDirName),
  webpackContextPath = path.join(__dirname, '/'),
  webpackPublicPath = '/';

module.exports = {
  publicDirName,
  webpackClientBuildDirPath,
  webpackContextPath,
  webpackPublicPath
};
