'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .App
  .config(
    function ($stateProvider) {

      var basicConfigurationView = {
        url: '/basic-configuration',
        controller: 'basicConfigurationViewCtrl',
        templateUrl: 'basic-configuration/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemo.basic-configuration', basicConfigurationView);
    });
