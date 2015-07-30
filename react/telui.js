'use strict';

var TelUI = require('@telogical/telui-core');
TelUI.PickList = require('./widgets/picklist')(TelUI);
TelUI.CheckboxList = require('./widgets/checkboxlist')(TelUI);

module.exports = TelUI;
