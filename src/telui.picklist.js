var TelUI = require('@telogical/telui-core'),
    uuid = require('uuid'),
    _ = TelUI.Core._;


require('@telogical/telui-text');
require('@telogical/telui-button');
require('@telogical/telui-checkbox');
require('@telogical/telui-label');

angular
    .module('TelUI')
    .directive('teluiPicklist', [
    function reactPicklistDirective() {
            'use strict';

            function link(scope, $el, attrs) {

                var id = scope.id ?
                    scope.id :
                    'picklist_' + uuid.v1();
              
              
              scope.filteredData = scope.data;

            }

            function picklistController() {


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
                link: link,
                controller: picklistController,
                template: require('./telui.picklist-partial.html')
            };
    }
]);
