'use strict';

var PicklistDemoApp = require('../../scripts/app.js');

PicklistDemoApp
  .App
  .config(
    function($stateProvider) {

      var exampleFeatureTwoView = {
        url: '/example-feature-two',
        controller: 'exampleFeatureTwoViewCtrl',
        templateUrl: 'example-feature-two/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemo.example-feature-two', exampleFeatureTwoView);
    });
