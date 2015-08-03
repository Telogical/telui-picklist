function PickList(ui) {
    'use strict';

    var React = ui.Core.React,
        _ = ui.Core._;


    return React.createClass({
        displayName: 'PickList',
        mixins: [ui.Mixins.Widget, ui.Mixins.Appearance],
        propTypes: {

        },
        getInitialState: function getInitialState() {
            return {
                id: '',
                label: ''
            };
        },

        componentDidUpdate: function componentDidUpdate() {

        },
        render: function render() {


            console.log(ui);

            var cx = React.addons.classSet,
                domx = React.DOM,
                model = this.props,
                key = model.id;

            //build component
            var frameClasses = {
                'waffles': true,
                'ui-widget': true,
                'ui-picklist': true,
                'ui-corner-all': true,
                'ui-picklist-frame': true
            };

            frameClasses = this.__applyUiStates.call(this, frameClasses);

            var frameAttrs = {
                id: key,
                className: cx(frameClasses),
            };

            //templating - Note:l this is identical to the combobox, time to pull it out.
            var labelProp = model.labelProp,
                isTemplate = _.contains(labelProp, '<%') || _.contains(labelProp, '%>'),
                labelTemplateString = isTemplate ? labelProp : '<%= ' + labelProp + '%>',
                labelTemplate = _.template(labelTemplateString);


            //note very similar to a functioni the combobox.
            function dataToSelectList(datum) {
                var selectListModel = {
                    label: _.isObject(datum) ? labelTemplate(datum) : datum,
                    value: datum
                };

                if (datum.id) {
                    selectListModel.id = datum.id;
                }

                return selectListModel;
            }

            var _data = _
                .chain(model.data)
                .value();
            
            model.dataMenuScope.data = _data;
            model.dataMenuScope.value = model.dataMenuScope.value || [];
            
            console.log('model.dataMenuScope.data', model.dataMenuScope.data);
          
            var dataMenuModel = {
                id: key + '_data_menu',
                data: model.dataMenuScope.data,
                value: model.dataMenuScope.value,
                disabled: model.disabled,
                labelProp: model.labelProp,
                scope: model.dataMenuScope,
                uiState: model.uiState,
                text: (model.text === false) ? false : true,
                ref: 'data-menu',
                name: key + '_menu',
                appearance: model.appearance
            };

            var primaryFilterModel = {
                id: key + '_data_filter'
            };

            var dataListFrameAttrs = {
                className: 'ui-picklist-list-frame'
            };
              
            var dataChecklist = ui.CheckboxList(dataMenuModel)
            var dataMenu = domx.div(dataListFrameAttrs, dataChecklist);

            var dataZoneAttrs = {
                id: key + '_zone_data',
                className: cx({
                    'ui-picklist-zone': true,
                    'ui-picklist-data': true
                }),
            };

            var controlZoneAttrs = {
                id: key + '_zone_controls',
                className: cx({
                    'ui-picklist-zone': true,
                    'ui-picklist-controls': true
                }),
            };


            var selectionZoneAttrs = {
                id: key + '_zone_selection',
                className: cx({
                    'ui-picklist-zone': true,
                    'ui-picklist-selection': true
                }),
            };

            var dataZoneContents = [];
            dataZoneContents.push(ui.Text(primaryFilterModel));
            dataZoneContents.push(dataMenu);


            var controlZoneContents = [];

            var selectAllButton = ui.Button({
                    id: key + '_controls_select_all',
                    text: true,
                    label: '>>',
                    //iconPrimary: 'circle-arrow-1-w'
                }),
                selectOneButton = ui.Button({
                    id: key + '_controls_select_one',
                    label: '>',
                    text: true,
                }),
                clearOneButton = ui.Button({
                    id: key + '_controls_clear_one',
                    label: '<',
                    text: true,
                }),
                clearAllButton = ui.Button({
                    id: key + '_controls_clear_all',
                    label: '<<',
                    text: true,
                });

            controlZoneContents.push(selectAllButton);
            controlZoneContents.push(selectOneButton);
            controlZoneContents.push(clearOneButton);
            controlZoneContents.push(clearAllButton);


            var dataZone = domx.div(dataZoneAttrs, dataZoneContents),
                controlZone = domx.div(controlZoneAttrs, controlZoneContents),
                selectionZone = domx.div(selectionZoneAttrs, []);

            var contents = [];


            if (model.label) {

                var labelModel = {
                    id: key + '_label',
                    label: model.label,
                    uiState: model.uiState,
                    appearance: 'label'
                };

                contents.push(ui.Label(labelModel));
            }


            contents.push(domx.div({
                className: 'ui-picklist-zone-frame'
            }, [dataZone, controlZone, selectionZone]));


            return domx.div(frameAttrs, contents);
        }
    });
}

module.exports = PickList;
