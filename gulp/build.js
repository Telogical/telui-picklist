'use strict';
var gulp = require('gulp');

function Build(options) {
  require('./build/docs')(options);
  gulp.task('build', ['build-docs']);
  return gulp;
}

module.exports = Build;
