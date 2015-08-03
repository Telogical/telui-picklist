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


            }

            function picklistController($scope) {

                function filterData(filterValue) {

                    function dataByFilterString(datum) {

                        if (!filterValue) {
                            return datum;
                        }

                        var labelProp = $scope.labelProp,
                            isTemplate = _.contains(labelProp, '<%') || _.contains(labelProp, '%>'),
                            labelTemplateString = isTemplate ? labelProp : '<%= ' + labelProp + '%>',
                            labelTemplate = _.template(labelTemplateString);

                        var stringToFilter = labelTemplate(datum)
                            .toLowerCase(),
                            casedFilterValue = filterValue.toLowerCase();

                        if (filterValue && _.contains(stringToFilter, casedFilterValue)) {
                            return datum;
                        }

                    }


                    $scope.filteredData = _
                        .chain($scope.data)
                        .filter(dataBySelectionModel)
                        .filter(dataByFilterString)

                    .value();
                }

                function dataBySelectionModel(datum) {
                    if (datum.id) {
                        return !(_.findWhere($scope.selectionModel, {
                            id: datum.id
                        }));
                    }

                    function toStrings(datum) {
                        return JSON.stringify(datum);
                    }

                    var stringsOfSelectedSelectionModel = _.map($scope.selectionModel, toStrings),
                        stringDatum = JSON.stringify(datum);

                    return !_.contains(stringsOfSelectedSelectionModel, stringDatum);
                }

                function selectionModelBySelectedItems(datum) {
                    if (datum.id) {
                        return !(_.findWhere($scope.selectedSelectionModel, {
                            id: datum.id
                        }));
                    }

                    function toStrings(datum) {
                        return JSON.stringify(datum);
                    }

                    var stringsOfSelectedSelectionModel = _.map($scope.selectedSelectionModel, toStrings),
                        stringDatum = JSON.stringify(datum);

                    return !_.contains(stringsOfSelectedSelectionModel, stringDatum);
                }


                function selectAll() {
                    $scope.selectionModel = $scope.data.slice(0);
                }

                function byIdIfPresent(datum) {
                    if (datum.id) {
                        return datum.id;
                    }
                    return JSON.stringify(datum);
                }

                function selectDataModel() {
                    $scope.selectionModel = _
                        .chain($scope.selectionModel.slice(0))
                        .concat($scope.selectedData.slice(0))
                        .uniq(byIdIfPresent)
                        .value();
                }

                function deselectSelectionModel() {
                    $scope.selectionModel = _
                        .chain($scope.selectionModel)
                        .filter(selectionModelBySelectedItems)
                        .value();
                    //$scope.selectedSelectionModel = [];
                }

                function deselectAll() {
                    $scope.selectionModel = [];
                }

                function updateValue() {
                    filterData($scope.filterBy);
                    $scope.value = $scope.selectionModel;
                }

                $scope.appearanceControls = 'button';
                $scope.appearance = $scope.appearance || 'menuitem';
                $scope.selectAll = selectAll;
                $scope.selectDataModel = selectDataModel;
                $scope.deselectSelectionModel = deselectSelectionModel;
                $scope.deselectAll = deselectAll;

                $scope.selectionModel = $scope.selectionModel || [];
                $scope.value = $scope.selectionModel;
                $scope.filterBy = $scope.filterBy || '';
                $scope.$watch('filterBy', filterData);
                $scope.$watch('selectionModel', updateValue);

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