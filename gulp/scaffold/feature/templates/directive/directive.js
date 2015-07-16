'use strict';

<%= appName %>
  .Directives
  .directive('<%= featureNameVarLast %>', function <%= featureNameVar %>Directive() {

      //< <%= featureNameVarLast %>></ <%= featureNameVarLast %>>

      var scope = {
        id: '@',
        value: '=?'
      };

      var directive = {
        restrict: 'E',
        replace: true,
        scope: scope,
        controller: '<%= featureNameVar %>DirectiveCtrl',
        templateUrl: '<%= featureNameSlashKebab %>/directive-partial.html'
      };

      return directive;
  });
