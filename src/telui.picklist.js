var UI = require('../react/telui'),
  React = UI.Core.React,
  _ = UI.Core._;

angular
  .module('TelUI')
  .directive('teluiPicklist', [
    function reactPicklistDirective() {
      'use strict';

      function link(scope, $el /*, attrs*/) {

        var id = scope.id ?
          scope.id :
          'picklist_' + Math.round(Math.random() * 9999);

        scope.clearable = _.isUndefined(scope.clearable) ?
          false :
          scope.clearable;

        function render(/*newValue, oldValue*/) {

          $el.removeAttr('disabled');

          var model = {
            //scopes
            scope: scope,

            //attrs
            id: id,
            label: scope.label,
            iconPrimary: scope.iconPrimary,
            iconSecondary: scope.iconSecondary,
            cssClass: scope.cssClass,
            text: scope.text,
            disabled: scope.disabled,
            click: scope.click,
            value: scope.value,
            data: scope.data,
            clearable: scope.clearable,
            uiState: scope.state || 'default',
            maxHeight: scope.maxHeight || 'auto',
            labelProp: scope.labelProp || 'label'
          };

          React.renderComponent(UI.PickList(model), $el[0]);
        }

        scope.$watchCollection(
          '[value, data, label, labelProp,iconPrimary, iconSecondary, disabled, cssClass, text, click, state, maxHeight]',
          render);
      }

      var scopeDefinition = {
        id: '@',
        value: '=?',
        data: '=?',
        label: '@',
        disabled: '=',
        iconPrimary: '@',
        iconSecondary: '@',
        click: '&?',
        cssClass: '@',
        text: '=?',
        state: '@',
        clearable: '=?',
        maxHeight: '@',
        labelProp: '@'
      };

      return {
        restrict: 'E',
        replace: true,
        scope: scopeDefinition,
        template: '<div class="waffles"></div>',
        link: link
      };
    }
]);
