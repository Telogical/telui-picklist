'use strict';

PicklistDemoApp
  .App
  .config(
    function ($stateProvider) {

      var exampleFeatureView = {
        url: '/example-feature',
        controller: 'exampleFeatureViewCtrl',
        templateUrl: 'example-feature/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemoApp.example-feature', exampleFeatureView);
    });
