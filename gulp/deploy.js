'use strict';

var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages');


function Deploy(options) {
    
    function deploy() {
        console.log('start deploy', options.deployFiles);
        return gulp
            .src(options.deployFiles)
            .pipe(ghPages());
    }

    gulp.task('deploy', deploy);

    return gulp;
}


module.exports = Deploy;
