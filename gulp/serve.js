'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

function serve() {
  gulp
    .src('docs')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
}

gulp.task('serve', serve);
