'use strict';

var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages');


function Deploy(options) {

    function deploy() {
        return gulp
            .src(options.deployFiles)
            .pipe(ghPages());
    }

    gulp.task('deploy', deploy);

    return gulp;
}


module.exports = Deploy;
