'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence');
var coveralls = require('gulp-coveralls');
var tasklisting = require('gulp-task-listing');

function lcov() {
  gulp
    .src('coverage/**/lcov.info')
    .pipe(coveralls());
}

function ci(cb) {
  runSequence('test', 'complexity', cb);
}

require('./gulp/deploy');
require('./gulp/analysis');
require('./gulp/test');

gulp
  .task('help', tasklisting)
  .task('default', ['help'])
  .task('coveralls', lcov)
  .task('ci', ci);
