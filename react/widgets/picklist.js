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

    __keystrokeNavigation: function keystrokeNavigation(eve) {
    },

    __openMenu: function openMenu(eve) {
    },

    __onInputChange: function (eve) {

    },

    __clear: function clear() {

    },

    __onInputFocus: function () {

    },
    __onInputBlur: function () {

    },
    __onMenuChange: function onMenuChange(value) {

    },
    _positionMenu: function positionMenu(elDropdown, elInput, fitsOnScreen, bottomHalf) {

    },
    componentDidUpdate: function componentDidUpdate() {

    },
    render: function render() {

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
        },
        labelFrameAttrs = {
          className: row
        },
        labelAttrs = {
          className: 'ui-picklist-label ui-state-default'
        },
        contentFrameAttrs = {
          className: row
        },
        buttonFrameAttrs = {
          className: 'ui-picklist-dropdownbutton-frame'
        },
        inputFrameAttrs = {
          className: 'ui-picklist-input-frame'
        },
        inputAttrs = {
          className: 'ui-picklist-input ui-state-default',
          disabled: model.disabled,
          ref: 'input',
          value: inputVal || '',
          onChange: this.__onInputChange,
          onFocus: this.__onInputFocus,
          onBlur: this.__onInputBlur
        };

      var label = domx.label(labelAttrs, model.label),
        labelFrame = domx.div(labelFrameAttrs, label),

        inputRow.push(inputFrame);
      }

      var contentFrame = domx.div(contentFrameAttrs, inputRow);

      var contents = [
          labelFrame,
          contentFrame
      ];
      return domx.div(frameAttrs, contents);
    }
  });
}

module.exports = picklist;
