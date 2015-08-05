var TelUI = require('@telogical/telui-core'),
    uuid = require('uuid'),
    _ = TelUI.Core._;


require('@telogical/telui-text');
require('@telogical/telui-button');
require('@telogical/telui-checkbox');
require('@telogical/telui-label');


function reactPicklistDirective() {
    'use strict';

    function link(scope, $el, attrs) {
        scope.id = scope.id || 'picklist_' + uuid.v1();
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
                return !(_.findWhere($scope.value, {
                    id: datum.id
                }));
            }

            function toStrings(datum) {
                return JSON.stringify(datum);
            }

            var stringsOfSelectedSelectionModel = _.map($scope.value, toStrings),
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

        function clearUserSelectionModels() {
            $scope.selectedSelectionModel = [];
            $scope.selectedData = [];
        }

        function selectAll() {
            $scope.value = $scope.data.slice(0);
            clearUserSelectionModels();
        }

        function byIdIfPresent(datum) {
            if (datum.id) {
                return datum.id;
            }
            return JSON.stringify(datum);
        }

        function selectDataModel() {
            $scope.value = _
                .chain($scope.value.slice(0))
                .concat($scope.selectedData.slice(0))
                .uniq(byIdIfPresent)
                .value();

            clearUserSelectionModels();
        }

        function deselectSelectionModel() {
            $scope.value = _
                .chain($scope.value)
                .filter(selectionModelBySelectedItems)
                .value();

            clearUserSelectionModels();
        }

        function deselectAll() {
            $scope.value = [];
            clearUserSelectionModels();
        }

        function setValue(newValue, oldValue) {
            var stringyOldValue = JSON.stringify(oldValue),
                stringyValue = JSON.stringify(newValue);

            if (stringyOldValue === stringyValue) {
                return;
            }

            if (_.isArray(newValue)) {

                console.log('in picklist', newValue);

                filterData($scope.filterBy);
                $scope.value = newValue;
            }
        }

        function moveArrayItem(list, fromIndex, toIndex) {
            if (toIndex >= list.length || toIndex < 0) {
                return;
            }
            list.splice(toIndex, 0, list.splice(fromIndex, 1)[0]);
            return list;
        }

        function reorderSelectionModel(direction) {

            function selectionToIndexes(datum) {
                return _.findIndex(currentList, datum);
            }

            var currentList = $scope.value.slice(0);
            var currentSelection = $scope.selectedSelectionModel;

            var indexes = _
                .chain(currentSelection)
                .map(selectionToIndexes)
                .value()
                .sort();

            if (direction === 'up') {
                indexes = indexes.reverse();
            }

            _.each(indexes, function(indx) {
                var pos = (direction === 'up') ? 1 : -1;
                moveArrayItem(currentList, indx, indx + pos);
            });

            $scope.value = currentList;
        }


        $scope.appearanceControls = 'button';
        $scope.appearance = $scope.appearance || 'menuitem';
        $scope.selectAll = selectAll;
        $scope.selectDataModel = selectDataModel;
        $scope.deselectSelectionModel = deselectSelectionModel;
        $scope.deselectAll = deselectAll;


        console.log('init picklist', $scope.value);
        $scope.value = $scope.value || [];

        $scope.filterBy = $scope.filterBy || '';
        $scope.$watch('filterBy', filterData);
        $scope.$watch('value', setValue);
        $scope.reorderSelectionModel = reorderSelectionModel;

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
        labelProp: '@',

        filterPlaceholder: '@'
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

angular
    .module('TelUI')
    .directive('teluiPicklist', [reactPicklistDirective]);