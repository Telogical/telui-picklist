'use strict';

var gulp = require('gulp'),
    casing = require('./../casing'),
    template = require('gulp-template'),
    _ = require('lodash'),
    debug = require('gulp-debug'),
    rename = require('gulp-rename');

function Scaffold(options, answers) {


    var featureTemplatesRoot = './gulp/scaffold/feature/templates/',
        featureTemplates;

    //console.log('answers', answers);

    if (answers.featureType) {
        featureTemplates = featureTemplatesRoot + answers.featureType + '/**/*';
    }

    var prettyNames = {
        featureName: answers.featureName,
        featureNameKebab: casing.kebab(answers.featureName),
        featureNameSlashKebabLast: casing.folderName(answers.featureName),
        featureNameVar: casing.var(answers.featureName),
        featureNameVarLast: casing.varName(answers.featureName),
        featureNameSlashKebab: casing.folder(answers.featureName),
        featureNameClassify: casing.classify(answers.featureName),
        featureNameSnake: casing.snake(answers.featureName)
    };

    var opts = _
        .chain(options)
        .clone()
        .extend(options, answers, prettyNames)
        .value();

    //console.log('opts', opts);

    console.log('featureTemplates : ', featureTemplates)

    return gulp
        .src(featureTemplates)
        .pipe(debug({
            verbose: true
        }))
        //    .pipe(rename({
        //      prefix: prettyNames.featureNameClassify + '-'
        //    }))
        .pipe(template(opts))
        .pipe(debug({
            verbose: true
        }))
        .pipe(gulp.dest('./docs/features/' + opts.featureNameSlashKebab));

}

module.exports = Scaffold;
