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
       row = 'w-12 w-alpha w-omega',
       key = model.id;

      //build component
      var frameClasses = {
        'waffles': true,
        'ui-widget': true,
        'ui-picklist': true,
        'ui-corner-all': true
      };

      frameClasses = this.__applyUiStates.call(this, frameClasses);

      var frameAttrs = {
          className: cx(frameClasses),
        };


      var contents = [];

      return domx.div(frameAttrs, contents);
    }
  });
}

module.exports = PickList;
