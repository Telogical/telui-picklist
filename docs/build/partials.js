!function(a){try{a=angular.module("PicklistDemoPartials")}catch(i){a=angular.module("PicklistDemoPartials",[])}a.run(["$templateCache",function(a){a.put("basic-configuration/view-partial.html",'<div data-ng-id="basic_configuration" class="waffles ui-view-basic-configuration"><div class="w-12 w-alpha w-omega"><div class="w-12 w-alpha w-omega">#{{people.length}}</div><div class="w-12 w-alpha w-omega"><div class="w-6 w-alpha"><telui-combobox data="people" label="People" value="selectedPerson" label-prop="<%= name.last %>, <%= name.first %>"></telui-combobox></div><div class="w-6 w-omega">{{selectedPerson}}</div></div><div class="w-12 w-alpha w-omega w-v-4"><telui-picklist data="people" label="People Selector" label-primary="input list" label-secondary="output list" label-prop="<%= name.last %>, <%= name.first %>"></telui-picklist></div><!--\n      <div class="w-12 w-alpha w-omega">\n          <div class="w-6 w-alpha w-v-4">\n              <telui-checkbox-list\n                              data="people"\n                              label="People Selector Checkboxlist"\n                              value="checkboxlistValue"\n                              label-primary="input list"\n                              label-secondary="output list"\n                              label-prop="email"\n                              ></telui-checkbox-list>\n          </div>\n          <div class="w-6  w-omega w-v-4">\n              <div class="w-12">\n                {{checkboxlistValue}}\n              </div>\n          </div>\n       </div>\n--><div class="w-12 w-alpha w-omega"><div ui-view></div></div></div></div>')}])}(),function(a){try{a=angular.module("PicklistDemoPartials")}catch(i){a=angular.module("PicklistDemoPartials",[])}a.run(["$templateCache",function(a){a.put("changing-states/view-partial.html",'<div data-ng-id="changing_states" class="waffles ui-view-changing-states"><div class="w-12 w-alpha w-omega"><div class="w-12 w-alpha w-omega"><label>changin-states</label></div><div class="w-12 w-alpha w-omega"><div ui-view></div></div></div></div>')}])}(),function(a){try{a=angular.module("PicklistDemoPartials")}catch(i){a=angular.module("PicklistDemoPartials",[])}a.run(["$templateCache",function(a){a.put("demo/view-partial.html",'<div data-ng-id="demo" class="waffles ui-view-demo"><div class="w-12 w-alpha w-omega"><div class="w-3 w-alpha"><ul><li><a data-ui-sref="PicklistDemo.basic-configuration">basic-configuration</a></li><li><a data-ui-sref="PicklistDemo.changing-states">changing-states</a></li><li><a data-ui-sref="PicklistDemo.grouped-input">grouped-input</a></li></ul></div><div class="w-9 w-omega"><div ui-view></div></div></div></div>')}])}(),function(a){try{a=angular.module("PicklistDemoPartials")}catch(i){a=angular.module("PicklistDemoPartials",[])}a.run(["$templateCache",function(a){a.put("grouped-input/view-partial.html",'<div data-ng-id="grouped_input" class="waffles ui-view-grouped-input"><div class="w-12 w-alpha w-omega"><div class="w-12 w-alpha w-omega"><label>Now viewing: grouped-inpffffffffffffffffffffffffffut</label></div><div class="w-12 w-alpha w-omega"><div ui-view></div></div></div></div>')}])}();