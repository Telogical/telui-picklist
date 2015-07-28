'use strict';

var gulp = require('gulp');


function Analysis(options) {
    require('./analysis/complexity')(options);
    gulp.task('analysis', ['analysis-complexity']);

    return gulp;
}


module.exports = Analysis;
