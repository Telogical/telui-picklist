'use strict';
var gulp = require('gulp'),
    _ = require('lodash'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    size = require('gulp-size'),
    ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    manifest = require('gulp-concat-filenames'),
    htmlmin = require('gulp-htmlmin'),
    html2js = require('gulp-ng-html2js'),
    uglify = require('gulp-uglify'),
    tap = require('gulp-tap'),
    debug = require('gulp-debug');


function BuildDocScripts(globalOptions) {
    var options = _.extend(globalOptions, {
        argv: {
            minify: false
        }
    });

    var uglyOpts = {
        mangle: true,
        global_defs: {
            DEBUG: false
        }
    };

    var bundleOpts = {
        debug: !gutil.env.production
    };

    var htmlMinOpts = {
        collapseWhitespace: true
    };

    var html2JsOpts = {
        moduleName: options.appName + 'Partials',
        stripPrefix: 'src/public/features/'
    };

    function generateCoreJs() {

        //concatFilenames
        return browserify('./docs/scripts/core.js', bundleOpts)
            .bundle()
            .pipe(source('core.js'))
            .pipe(streamify(size({
                title: 'raw core.js'
            })))
            .pipe(options.argv.minify ? streamify(ngAnnotate()) : gutil.noop())
            .pipe(options.argv.minify ? streamify(uglify(uglyOpts)) : gutil.noop())
            .pipe(options.argv.minify ? streamify(size({
                title: 'min core.js'
            })) : gutil.noop())
            .pipe(gulp.dest(options.appOutput));
    }

    function generateAppJs() {

        var src = [
        './docs/scripts/app.js',
        './docs/features/**/*.js'
      ];

        var manifestOptions = {
            root: './',
            prepend: 'require("./',
            append: '");'
        };

        function browserifyApp(file) {
            return browserify(file, bundleOpts)
                .bundle()
                .pipe(source('app.js'))
                .pipe(streamify(size({
                    title: 'raw app.js'
                })))
                .pipe(options.argv.minify ? streamify(ngAnnotate()) : gutil.noop())
                .pipe(options.argv.minify ? streamify(uglify(uglyOpts)) : gutil.noop())
                .pipe(options.argv.minify ? streamify(size({
                    title: 'min app.js'
                })) : gutil.noop())
                .pipe(gulp.dest(options.appOutput));
        }

        return gulp
            .src(src)
            .pipe(debug({
                title: 'gulp-features : '
            }))
            .pipe(manifest('app.js', manifestOptions))
            .pipe(tap(browserifyApp));
    }

    function generatePartials() {

        console.log('partials : ', options);

        return gulp
            .src('./docs/features/**/*-partial.html')
            .pipe(debug({
                verbose: true
            }))
            .pipe(htmlmin(htmlMinOpts))
            .pipe(html2js(html2JsOpts))
            .pipe(concat('partials.js'))
            .pipe(uglify())
            .pipe(gulp.dest(options.appOutput));
    }

    gulp.task('build-docs-scripts-core', generateCoreJs);
    gulp.task('build-docs-scripts-app', generateAppJs);
    gulp.task('build-docs-scripts-partials', generatePartials);
    gulp.task('build-docs-scripts', [
    'build-docs-scripts-core',
    'build-docs-scripts-app',
    'build-docs-scripts-partials']);

    return gulp;
}


module.exports = BuildDocScripts;
