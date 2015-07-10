'use strict';
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  uglify = require('gulp-uglify'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  streamify = require('gulp-streamify'),
  size = require('gulp-size'),
  ngAnnotate = require('gulp-ng-annotate');


  var options = {
    argv: {
      minify: false
    },
    appOutput: './docs/build/'
  };

  var uglyOpts = {
    mangle: true,
    global_defs: {
      DEBUG: false
    }
  };

  var bundleOpts = {
    debug: !gutil.env.production
  };

  function generateCoreJs() {

    return browserify('./docs/scripts/core.js', bundleOpts)
      .bundle()
      .pipe(source('core.js'))
      .pipe(streamify(size({title: 'raw core.js'})))
      .pipe(options.argv.minify ? streamify(ngAnnotate()) : gutil.noop())
      .pipe(options.argv.minify ? streamify(uglify(uglyOpts)) : gutil.noop())
      .pipe(options.argv.minify ? streamify(size({title: 'min core.js'})) : gutil.noop())
      .pipe(gulp.dest(options.appOutput));
  }

  function generateAppJs(){
    return browserify('./docs/scripts/app.js', bundleOpts)
      .bundle()
      .pipe(source('app.js'))
      .pipe(streamify(size({title: 'raw app.js'})))
      .pipe(options.argv.minify ? streamify(ngAnnotate()) : gutil.noop())
      .pipe(options.argv.minify ? streamify(uglify(uglyOpts)) : gutil.noop())
      .pipe(options.argv.minify ? streamify(size({title: 'min app.js'})) : gutil.noop())
      .pipe(gulp.dest(options.appOutput));
  }

  gulp.task('build-docs-scripts-core', generateCoreJs);
  gulp.task('build-docs-scripts-app', generateAppJs);
