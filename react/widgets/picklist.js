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
                
                if(datum.id){
                    selectListModel.id = datum.id;
                }

                return selectListModel;
            }

            var _data = _
                .chain(model.data)
                .map(dataToSelectList)
                .value();

            var dataMenuModel = {
                id: key + '_menu',
                data: _data || [],
                value: this.state.value,
                disabled: model.disabled,
                labelProp: 'label',
                scope: model.menuScope,
                uiState: model.uiState,
                ref: 'menu',
                name: key + '_menu',
                change: this.__onMenuChange,
                maxHeight: model.maxHeight,
                focusable: false,
                appearance: 'menuitem'
            };
            
            var primaryFilterModel = {
                
            };
            
            var dataMenu = ui.Menu(dataMenuModel);
            
            
            var dataZoneContents = [];
            
            dataZoneContents.push(ui.Text(primaryFilterModel));
            
            dataZoneContents.push(dataMenu);
            
            var dataZone = domx.div({}, dataZoneContents),
                controlZone = domx.div(),
                selectionZone = domx.div();
            
            var contents = [
                dataZone,
                controlZone,
                selectionZone];

            return domx.div(frameAttrs, contents);
        }
    });
}

module.exports = PickList;
