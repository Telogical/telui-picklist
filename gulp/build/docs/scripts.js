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

  function generateCoreJs() {

    var uglyOpts = {
      mangle: true,
      global_defs: {
        DEBUG: false
      }
    };

    var bundleOpts = {
      debug: !gutil.env.production
    };

    return browserify('./docs/scripts/core.js', bundleOpts)
      .bundle()
      .pipe(source('./docs/out/core.js'))
      .pipe(streamify(size({title: 'raw core.js'})))
      .pipe(options.argv.minify ? streamify(ngAnnotate()) : gutil.noop())
      .pipe(options.argv.minify ? streamify(uglify(uglyOpts)) : gutil.noop())
      .pipe(options.argv.minify ? streamify(size({title: 'min core.js'})) : gutil.noop())
      .pipe(gulp.dest(options.appOutput));
  }

  gulp.task('build-docs-scripts-core', generateCoreJs);
