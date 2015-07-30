/////
// TODO: THIS ABSOLUTELY BELONGS IN THE CHECKBOX COMPONENT OR ON ITS OWN!


function CheckboxList(ui) {
    'use strict';

    var React = ui.Core.React,
        _ = ui.Core._;


    return React.createClass({
        displayName: 'CheckboxList',
        mixins: [ui.Mixins.Widget],
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
                'ui-checkboxlist-frame': true
            };

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
                .map(dataToSelectList)
                .value();

            

            return domx.div(frameAttrs, 'checkboxlist goes here');
        }
    });
}

module.exports = CheckboxList;
