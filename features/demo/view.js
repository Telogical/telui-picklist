'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .App
  .config(
    function ($stateProvider) {

      var demoView = {
        url: '/demo',
        controller: 'demoViewCtrl',
        templateUrl: 'demo/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemo', demoView);
    });
