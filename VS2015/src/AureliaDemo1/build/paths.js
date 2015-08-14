var path = require('path');

var wwwRoot = 'wwwroot/';
var appRoot = wwwRoot + 'src/';
var outputRoot = wwwRoot + 'dist/';

module.exports = {
  wwwRoot: wwwRoot,	
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: wwwRoot + 'styles/**/*.css',
  output: outputRoot,
  doc: wwwRoot + './doc',
  e2eSpecsSrc: wwwRoot + 'test/e2e/src/*.js',
  e2eSpecsDist: wwwRoot + 'test/e2e/dist/'
};
