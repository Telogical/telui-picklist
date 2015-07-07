'use strict';

var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');

function test(cb) {

  var mochaOpts = {
    reporter: 'nyan'
  };

  function runner() {
    gulp
      .src(['./spec/main.js'])
      .pipe(mocha(mochaOpts))
      .pipe(istanbul.writeReports())

    .on('end', cb);
  }

  gulp
    .src(['./index.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', runner);
}

gulp.task('test', test);
