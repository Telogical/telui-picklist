'use strict';

var gulp = require('gulp');
var autoprefixer = require('autoprefixer-stylus');
var nib = require('nib');
var waffles = require('waffles');
var debug = require('gulp-debug');
var stylus = require('gulp-stylus');
var concatFilenames = require('gulp-concat-filenames');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var flatten = require('gulp-flatten');

var stylusMiddleware = [nib(),
            autoprefixer({
              browsers: ['ie 7', 'ie 8']
            }),
            waffles()];

var stylusConfig = {use: stylusMiddleware};

var themesRoot = 'node_modules/@telogical/';

var concatOpts = {
     prepend: '@require "./',
     append: '"',
     root: './'
   };

var src = [
  './docs/global.styl',
  themesRoot + 'telui-core/theme/**/_*.styl',
  themesRoot + 'telui-*/theme/**/_*.styl',
  themesRoot + 'telui-core/theme/**/*.styl',
  themesRoot + 'telui-*/theme/**/*.styl',
  'theme/**/*.styl',
]

function buildStyles(){
  return gulp
    .src(src)
    .pipe(concat('theme.styl', {}))
    .pipe(debug({verbose:true}))
    .pipe(stylus(stylusConfig))
    .pipe(gulp.dest('docs/build/'));
}

function buildAssets(){
  //for now only fonts

  var assetsSrc = [
    themesRoot + 'telui-*/theme/fonts/**/*.{ttf,woff,eof,svg,eot}'
  ]

  return gulp
    .src(assetsSrc)
    .pipe(flatten())
    .pipe(gulp.dest('docs/build/fonts'));

}

gulp.task('build-docs-assets', buildAssets);
gulp.task('build-docs-styles', buildStyles);
