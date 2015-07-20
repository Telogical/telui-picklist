'use strict';

var PicklistDemoApp = require('../../scripts/app.js');

PicklistDemoApp
  .App
  .config(
    function ($stateProvider) {

      var exampleFeatureView = {
        url: '/example-feature',
        controller: 'exampleFeatureViewCtrl',
        //templateUrl: 'example-feature/view-partial.html'
        template: '<h2>example-feature</h2>'
      };

      $stateProvider
        .state('PicklistDemo.example-feature', exampleFeatureView);
    });
