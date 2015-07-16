  'use strict';

var gulp = require('gulp'),
  inquirer = require('inquirer'),
  Questions = require('./questions'),
  Scaffold = require('./scaffold')
  ;

  var options = {
    appName: 'PicklistDemoApp'

  };


  var questions = new Questions(options);

  function templateFeature(cb) {

    function scaffold(answers) {
      new Scaffold(options, answers);
      cb();
    }

    inquirer.prompt(questions, scaffold);
  }

  return gulp.task('scaffold-feature', templateFeature);
