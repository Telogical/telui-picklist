'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .App
  .config(
    function ($stateProvider) {

      var changingStatesView = {
        url: '/changing-states',
        controller: 'changingStatesViewCtrl',
        templateUrl: 'changing-states/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemo.changing-states', changingStatesView);
    });
