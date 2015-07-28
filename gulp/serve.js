'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

function Serve(options) {

    function serve() {

        console.log('serving : ', options.appName);

        return gulp
            .src('./docs')
            .pipe(webserver({
                livereload: true,
                //directoryListing: true,
                open: true
            }));
    }

    gulp.task('serve', serve);

    return gulp;
}

module.exports = Serve;
