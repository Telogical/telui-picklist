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

var options = {
    appName: 'PicklistDemo',
    deployfiles: './docs/**/*',
    appOutput: './docs/build',
};

require('./gulp/deploy')(options);
require('./gulp/analysis')(options);
require('./gulp/test')(options);
require('./gulp/serve')(options);
require('./gulp/build')(options);
require('./gulp/scaffold')(options);

function bs() {
    return runSequence('build', 'serve');
}

gulp.task('bs', bs);

gulp
    .task('help', tasklisting)
    .task('default', ['help'])
    .task('coveralls', lcov)
    .task('ci', ci);
