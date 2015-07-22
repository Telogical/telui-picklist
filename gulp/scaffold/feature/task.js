'use strict';

var gulp = require('gulp'),
  inquirer = require('inquirer'),
  Questions = require('./questions'),
  Scaffold = require('./scaffold');

function ScaffoldFeature(options) {

  var opts = {
    appName: options.appName || 'PicklistDemo'
  };

  var questions = new Questions(opts);

  function templateFeature(cb) {

    function scaffold(answers) {
      new Scaffold(opts, answers);
      cb();
    }

    inquirer.prompt(questions, scaffold);
  }

  gulp.task('scaffold-feature', templateFeature);

  return gulp;
}

module.exports = ScaffoldFeature;
