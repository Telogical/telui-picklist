'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .App
  .config(
    function ($stateProvider) {

      var groupedInputView = {
        url: '/grouped-input',
        controller: 'groupedInputViewCtrl',
        templateUrl: 'grouped-input/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemo.grouped-input', groupedInputView);
    });
