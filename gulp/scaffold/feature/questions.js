'use strict';

var inquirer = require('inquirer');

var ui = new inquirer.ui.BottomBar();

function DefaultQuestions(options) {

    var prompts = [{
        name: 'featureName',
        message: 'What is the name of this feature?',
        default: 'example-feature'
    }, {
        name: 'featureType',
        type: 'list',
        message: 'Is this a view or directive?',
        default: 'View',
        choices: [
      'View',
      'Directive',
      new inquirer.Separator(),
      'Neither'
    ],
        filter: function(selection) {
            return selection.toLowerCase();
        },
        when: function featureName(answers) {
            ui.log.write('It shall be named : ' + answers.featureName);
            return answers.featureName;
        }
  }];

    return prompts;
}


module.exports = DefaultQuestions;
