'use strict';

var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence');

function BuildDocs(options) {

    require('./docs/scripts')(options);
    require('./docs/styles')(options);

    function cleanDocs(cb) {
        del([options.appOutput], cb);
    }

    var buildTargets = [
      'build-docs-scripts',
      'build-docs-styles',
      'build-docs-assets'
    ];

    function buildDocs() {
        return runSequence('clean-docs', buildTargets);
    }

    gulp.task('clean-docs', cleanDocs);
    gulp.task('build-docs', buildDocs);
    return gulp;
}

module.exports = BuildDocs;
