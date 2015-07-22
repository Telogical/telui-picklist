'use strict';

var gulp = require('gulp');


function BuildDocs(options) {

  require('./docs/scripts')(options);
  require('./docs/styles')(options);

  gulp.task('build-docs', ['build-docs-scripts', 'build-docs-styles', 'build-docs-assets']);
  return gulp;
}

module.exports = BuildDocs;
