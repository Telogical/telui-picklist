'use strict';

var <%= appName %> = require('../../scripts/app.js');

<%= appName %>
  .App
  .config(
    function ($stateProvider) {

      var <%= featureNameVar %>View = {
        url: '/<%= featureNameSlashKebabLast %>',
        controller: '<%= featureNameVar %>ViewCtrl',
        templateUrl: '<%= featureNameSlashKebab %>/view-partial.html'
      };

      $stateProvider
        .state('<%= appName %>.<%= featureNameKebab %>', <%= featureNameVar %>View);
    });
