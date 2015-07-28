'use strict';

var gulp = require('gulp'),
    inquirer = require('inquirer'),
    Questions = require('./questions'),
    Scaffold = require('./scaffold');

function ScaffoldFeature(options) {

    var questions = new Questions(options);

    function templateFeature(cb) {

        function scaffold(answers) {
            new Scaffold(options, answers);
            cb();
        }

        inquirer.prompt(questions, scaffold);
    }

    gulp.task('scaffold-feature', templateFeature);

    return gulp;
}

module.exports = ScaffoldFeature;
