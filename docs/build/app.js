(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("./docs/scripts/app.js");
require("./docs/features/basic-configuration/view-controller.js");
require("./docs/features/basic-configuration/view.js");
require("./docs/features/changing-states/view-controller.js");
require("./docs/features/changing-states/view.js");
require("./docs/features/demo/view-controller.js");
require("./docs/features/demo/view.js");
require("./docs/features/grouped-input/view-controller.js");
require("./docs/features/grouped-input/view.js");
require("./docs/features/mock/mock.js");

},{"./docs/features/basic-configuration/view-controller.js":2,"./docs/features/basic-configuration/view.js":3,"./docs/features/changing-states/view-controller.js":4,"./docs/features/changing-states/view.js":5,"./docs/features/demo/view-controller.js":6,"./docs/features/demo/view.js":7,"./docs/features/grouped-input/view-controller.js":8,"./docs/features/grouped-input/view.js":9,"./docs/features/mock/mock.js":10,"./docs/scripts/app.js":13}],2:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .Controllers
  .controller('basicConfigurationViewCtrl', function basicConfigurationCtrl($scope, mock) {

      
      var people = mock.entity('people');
  
      console.log(people);
  });

},{"../../scripts/app.js":13}],3:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .App
  .config(
    function ($stateProvider) {

      var basicConfigurationView = {
        url: '/basic-configuration',
        controller: 'basicConfigurationViewCtrl',
        templateUrl: 'basic-configuration/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemo.basic-configuration', basicConfigurationView);
    });

},{"../../scripts/app.js":13}],4:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .Controllers
  .controller('changingStatesViewCtrl', function changingStatesCtrl($scope) {



  });

},{"../../scripts/app.js":13}],5:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .App
  .config(
    function ($stateProvider) {

      var changingStatesView = {
        url: '/changing-states',
        controller: 'changingStatesViewCtrl',
        templateUrl: 'changing-states/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemo.changing-states', changingStatesView);
    });

},{"../../scripts/app.js":13}],6:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .Controllers
  .controller('demoViewCtrl', function demoCtrl($scope) {



  });

},{"../../scripts/app.js":13}],7:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .App
  .config(
    function ($stateProvider) {

      var demoView = {
        url: '/demo',
        controller: 'demoViewCtrl',
        templateUrl: 'demo/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemo', demoView);
    });

},{"../../scripts/app.js":13}],8:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .Controllers
  .controller('groupedInputViewCtrl', function groupedInputCtrl($scope) {



  });

},{"../../scripts/app.js":13}],9:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .App
  .config(
    function ($stateProvider) {

      var groupedInputView = {
        url: '/grouped-input',
        controller: 'groupedInputViewCtrl',
        templateUrl: 'grouped-input/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemo.grouped-input', groupedInputView);
    });

},{"../../scripts/app.js":13}],10:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

console.log('PicklistDemo', PicklistDemo);

var schemas = {
  people : require('./schemas/people'),
  person : require('./schemas/person')
};

PicklistDemo
  .Services
  .service('mock', function mockList(){
  
    function mockEntity(entityName){
      
      console.log(schemas);
      
    }
  
  
    this.entity = mockEntity;
    
  });

},{"../../scripts/app.js":13,"./schemas/people":11,"./schemas/person":12}],11:[function(require,module,exports){
module.exports={
	"title": "Example People Schema",
	"type": "array",
    "minItems": "1",
	"items": {
      	"type": "object",
        "properties": {
            "firstName": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "age": {
                "description": "Age in years",
                "type": "integer",
                "minimum": 0
            }
        }
    }
}
},{}],12:[function(require,module,exports){
module.exports={
	"title": "Example Person Schema",
	"type": "object",
	"properties": {
		"firstName": {
			"type": "string"
		},
		"lastName": {
			"type": "string"
		},
		"age": {
			"description": "Age in years",
			"type": "integer",
			"minimum": 0
		}
	},
	"required": ["firstName", "lastName"]
}
},{}],13:[function(require,module,exports){


'use strict';
var appDependencies = [
    'ui.router',
    'TelUI',
    'PicklistDemoDirectives',
    'PicklistDemoControllers',
    'PicklistDemoServices',
    'PicklistDemoValues',
    'PicklistDemoPartials',
];

var PicklistDemo = {
  App: angular.module('PicklistDemoApp', appDependencies),
  Directives: angular.module('PicklistDemoDirectives', []),
  Controllers: angular.module('PicklistDemoControllers', []),
  Services: angular.module('PicklistDemoServices', []),
  Values: angular.module('PicklistDemoValues', []),
  Partials: angular.module('PicklistDemoPartials', []),
  Telui: angular.module('TelUI')
};

function stateChangeError(event, toState, toParams, fromState) {
 console.log('!EVENT!', event);
 console.log('!TOSTATE!', toState);
 console.log('!TOPARAMS!', toParams);
 console.log('$stateChangeError to "' + toState.name + '" from state "' + fromState.name + '"- fired when the transition begins. toState,toParams : \n', toState, toParams);
}

function stateNotfound(event, unfoundState, fromState, fromParams) {
  console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
  console.log(unfoundState, fromState, fromParams);
}

function debug($rootScope) {
  $rootScope.$on('$stateChangeError',stateChangeError);
  $rootScope.$on('$stateNotFound', stateNotfound);
}

function run($rootScope) {
  $rootScope.skin = $rootScope.skin || '_Blank';
  debug($rootScope);
}

PicklistDemo
  .App
  .run(run);

module.exports = PicklistDemo;






























},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3RyZWFtXzAuanMiLCJkb2NzL2ZlYXR1cmVzL2Jhc2ljLWNvbmZpZ3VyYXRpb24vdmlldy1jb250cm9sbGVyLmpzIiwiZG9jcy9mZWF0dXJlcy9iYXNpYy1jb25maWd1cmF0aW9uL3ZpZXcuanMiLCJkb2NzL2ZlYXR1cmVzL2NoYW5naW5nLXN0YXRlcy92aWV3LWNvbnRyb2xsZXIuanMiLCJkb2NzL2ZlYXR1cmVzL2NoYW5naW5nLXN0YXRlcy92aWV3LmpzIiwiZG9jcy9mZWF0dXJlcy9kZW1vL3ZpZXctY29udHJvbGxlci5qcyIsImRvY3MvZmVhdHVyZXMvZGVtby92aWV3LmpzIiwiZG9jcy9mZWF0dXJlcy9ncm91cGVkLWlucHV0L3ZpZXctY29udHJvbGxlci5qcyIsImRvY3MvZmVhdHVyZXMvZ3JvdXBlZC1pbnB1dC92aWV3LmpzIiwiZG9jcy9mZWF0dXJlcy9tb2NrL21vY2suanMiLCJkb2NzL2ZlYXR1cmVzL21vY2svc2NoZW1hcy9wZW9wbGUuanNvbiIsImRvY3MvZmVhdHVyZXMvbW9jay9zY2hlbWFzL3BlcnNvbi5qc29uIiwiZG9jcy9zY3JpcHRzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZShcIi4vZG9jcy9zY3JpcHRzL2FwcC5qc1wiKTtcbnJlcXVpcmUoXCIuL2RvY3MvZmVhdHVyZXMvYmFzaWMtY29uZmlndXJhdGlvbi92aWV3LWNvbnRyb2xsZXIuanNcIik7XG5yZXF1aXJlKFwiLi9kb2NzL2ZlYXR1cmVzL2Jhc2ljLWNvbmZpZ3VyYXRpb24vdmlldy5qc1wiKTtcbnJlcXVpcmUoXCIuL2RvY3MvZmVhdHVyZXMvY2hhbmdpbmctc3RhdGVzL3ZpZXctY29udHJvbGxlci5qc1wiKTtcbnJlcXVpcmUoXCIuL2RvY3MvZmVhdHVyZXMvY2hhbmdpbmctc3RhdGVzL3ZpZXcuanNcIik7XG5yZXF1aXJlKFwiLi9kb2NzL2ZlYXR1cmVzL2RlbW8vdmlldy1jb250cm9sbGVyLmpzXCIpO1xucmVxdWlyZShcIi4vZG9jcy9mZWF0dXJlcy9kZW1vL3ZpZXcuanNcIik7XG5yZXF1aXJlKFwiLi9kb2NzL2ZlYXR1cmVzL2dyb3VwZWQtaW5wdXQvdmlldy1jb250cm9sbGVyLmpzXCIpO1xucmVxdWlyZShcIi4vZG9jcy9mZWF0dXJlcy9ncm91cGVkLWlucHV0L3ZpZXcuanNcIik7XG5yZXF1aXJlKFwiLi9kb2NzL2ZlYXR1cmVzL21vY2svbW9jay5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL2FwcC5qcycpO1xyXG5cclxuUGlja2xpc3REZW1vXHJcbiAgLkNvbnRyb2xsZXJzXHJcbiAgLmNvbnRyb2xsZXIoJ2Jhc2ljQ29uZmlndXJhdGlvblZpZXdDdHJsJywgZnVuY3Rpb24gYmFzaWNDb25maWd1cmF0aW9uQ3RybCgkc2NvcGUsIG1vY2spIHtcclxuXHJcbiAgICAgIFxyXG4gICAgICB2YXIgcGVvcGxlID0gbW9jay5lbnRpdHkoJ3Blb3BsZScpO1xyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZyhwZW9wbGUpO1xyXG4gIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUGlja2xpc3REZW1vID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0cy9hcHAuanMnKTtcclxuXHJcblBpY2tsaXN0RGVtb1xyXG4gIC5BcHBcclxuICAuY29uZmlnKFxyXG4gICAgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcblxyXG4gICAgICB2YXIgYmFzaWNDb25maWd1cmF0aW9uVmlldyA9IHtcclxuICAgICAgICB1cmw6ICcvYmFzaWMtY29uZmlndXJhdGlvbicsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ2Jhc2ljQ29uZmlndXJhdGlvblZpZXdDdHJsJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2Jhc2ljLWNvbmZpZ3VyYXRpb24vdmlldy1wYXJ0aWFsLmh0bWwnXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnUGlja2xpc3REZW1vLmJhc2ljLWNvbmZpZ3VyYXRpb24nLCBiYXNpY0NvbmZpZ3VyYXRpb25WaWV3KTtcclxuICAgIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUGlja2xpc3REZW1vID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0cy9hcHAuanMnKTtcclxuXHJcblBpY2tsaXN0RGVtb1xyXG4gIC5Db250cm9sbGVyc1xyXG4gIC5jb250cm9sbGVyKCdjaGFuZ2luZ1N0YXRlc1ZpZXdDdHJsJywgZnVuY3Rpb24gY2hhbmdpbmdTdGF0ZXNDdHJsKCRzY29wZSkge1xyXG5cclxuXHJcblxyXG4gIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUGlja2xpc3REZW1vID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0cy9hcHAuanMnKTtcclxuXHJcblBpY2tsaXN0RGVtb1xyXG4gIC5BcHBcclxuICAuY29uZmlnKFxyXG4gICAgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcblxyXG4gICAgICB2YXIgY2hhbmdpbmdTdGF0ZXNWaWV3ID0ge1xyXG4gICAgICAgIHVybDogJy9jaGFuZ2luZy1zdGF0ZXMnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdjaGFuZ2luZ1N0YXRlc1ZpZXdDdHJsJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2NoYW5naW5nLXN0YXRlcy92aWV3LXBhcnRpYWwuaHRtbCdcclxuICAgICAgfTtcclxuXHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdQaWNrbGlzdERlbW8uY2hhbmdpbmctc3RhdGVzJywgY2hhbmdpbmdTdGF0ZXNWaWV3KTtcclxuICAgIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUGlja2xpc3REZW1vID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0cy9hcHAuanMnKTtcclxuXHJcblBpY2tsaXN0RGVtb1xyXG4gIC5Db250cm9sbGVyc1xyXG4gIC5jb250cm9sbGVyKCdkZW1vVmlld0N0cmwnLCBmdW5jdGlvbiBkZW1vQ3RybCgkc2NvcGUpIHtcclxuXHJcblxyXG5cclxuICB9KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFBpY2tsaXN0RGVtbyA9IHJlcXVpcmUoJy4uLy4uL3NjcmlwdHMvYXBwLmpzJyk7XHJcblxyXG5QaWNrbGlzdERlbW9cclxuICAuQXBwXHJcbiAgLmNvbmZpZyhcclxuICAgIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG5cclxuICAgICAgdmFyIGRlbW9WaWV3ID0ge1xyXG4gICAgICAgIHVybDogJy9kZW1vJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnZGVtb1ZpZXdDdHJsJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2RlbW8vdmlldy1wYXJ0aWFsLmh0bWwnXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnUGlja2xpc3REZW1vJywgZGVtb1ZpZXcpO1xyXG4gICAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL2FwcC5qcycpO1xyXG5cclxuUGlja2xpc3REZW1vXHJcbiAgLkNvbnRyb2xsZXJzXHJcbiAgLmNvbnRyb2xsZXIoJ2dyb3VwZWRJbnB1dFZpZXdDdHJsJywgZnVuY3Rpb24gZ3JvdXBlZElucHV0Q3RybCgkc2NvcGUpIHtcclxuXHJcblxyXG5cclxuICB9KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFBpY2tsaXN0RGVtbyA9IHJlcXVpcmUoJy4uLy4uL3NjcmlwdHMvYXBwLmpzJyk7XHJcblxyXG5QaWNrbGlzdERlbW9cclxuICAuQXBwXHJcbiAgLmNvbmZpZyhcclxuICAgIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG5cclxuICAgICAgdmFyIGdyb3VwZWRJbnB1dFZpZXcgPSB7XHJcbiAgICAgICAgdXJsOiAnL2dyb3VwZWQtaW5wdXQnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdncm91cGVkSW5wdXRWaWV3Q3RybCcsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdncm91cGVkLWlucHV0L3ZpZXctcGFydGlhbC5odG1sJ1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ1BpY2tsaXN0RGVtby5ncm91cGVkLWlucHV0JywgZ3JvdXBlZElucHV0Vmlldyk7XHJcbiAgICB9KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFBpY2tsaXN0RGVtbyA9IHJlcXVpcmUoJy4uLy4uL3NjcmlwdHMvYXBwLmpzJyk7XHJcblxyXG5jb25zb2xlLmxvZygnUGlja2xpc3REZW1vJywgUGlja2xpc3REZW1vKTtcclxuXHJcbnZhciBzY2hlbWFzID0ge1xyXG4gIHBlb3BsZSA6IHJlcXVpcmUoJy4vc2NoZW1hcy9wZW9wbGUnKSxcclxuICBwZXJzb24gOiByZXF1aXJlKCcuL3NjaGVtYXMvcGVyc29uJylcclxufTtcclxuXHJcblBpY2tsaXN0RGVtb1xyXG4gIC5TZXJ2aWNlc1xyXG4gIC5zZXJ2aWNlKCdtb2NrJywgZnVuY3Rpb24gbW9ja0xpc3QoKXtcclxuICBcclxuICAgIGZ1bmN0aW9uIG1vY2tFbnRpdHkoZW50aXR5TmFtZSl7XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhzY2hlbWFzKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICB0aGlzLmVudGl0eSA9IG1vY2tFbnRpdHk7XHJcbiAgICBcclxuICB9KTtcclxuIiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwidGl0bGVcIjogXCJFeGFtcGxlIFBlb3BsZSBTY2hlbWFcIixcclxuXHRcInR5cGVcIjogXCJhcnJheVwiLFxyXG4gICAgXCJtaW5JdGVtc1wiOiBcIjFcIixcclxuXHRcIml0ZW1zXCI6IHtcclxuICAgICAgXHRcInR5cGVcIjogXCJvYmplY3RcIixcclxuICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICBcImZpcnN0TmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImxhc3ROYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBZ2UgaW4geWVhcnNcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcclxuICAgICAgICAgICAgICAgIFwibWluaW11bVwiOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJ0aXRsZVwiOiBcIkV4YW1wbGUgUGVyc29uIFNjaGVtYVwiLFxyXG5cdFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG5cdFwicHJvcGVydGllc1wiOiB7XHJcblx0XHRcImZpcnN0TmFtZVwiOiB7XHJcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiXHJcblx0XHR9LFxyXG5cdFx0XCJsYXN0TmFtZVwiOiB7XHJcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiXHJcblx0XHR9LFxyXG5cdFx0XCJhZ2VcIjoge1xyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiQWdlIGluIHllYXJzXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImludGVnZXJcIixcclxuXHRcdFx0XCJtaW5pbXVtXCI6IDBcclxuXHRcdH1cclxuXHR9LFxyXG5cdFwicmVxdWlyZWRcIjogW1wiZmlyc3ROYW1lXCIsIFwibGFzdE5hbWVcIl1cclxufSIsIlxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgYXBwRGVwZW5kZW5jaWVzID0gW1xyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAnVGVsVUknLFxyXG4gICAgJ1BpY2tsaXN0RGVtb0RpcmVjdGl2ZXMnLFxyXG4gICAgJ1BpY2tsaXN0RGVtb0NvbnRyb2xsZXJzJyxcclxuICAgICdQaWNrbGlzdERlbW9TZXJ2aWNlcycsXHJcbiAgICAnUGlja2xpc3REZW1vVmFsdWVzJyxcclxuICAgICdQaWNrbGlzdERlbW9QYXJ0aWFscycsXHJcbl07XHJcblxyXG52YXIgUGlja2xpc3REZW1vID0ge1xyXG4gIEFwcDogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb0FwcCcsIGFwcERlcGVuZGVuY2llcyksXHJcbiAgRGlyZWN0aXZlczogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb0RpcmVjdGl2ZXMnLCBbXSksXHJcbiAgQ29udHJvbGxlcnM6IGFuZ3VsYXIubW9kdWxlKCdQaWNrbGlzdERlbW9Db250cm9sbGVycycsIFtdKSxcclxuICBTZXJ2aWNlczogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb1NlcnZpY2VzJywgW10pLFxyXG4gIFZhbHVlczogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb1ZhbHVlcycsIFtdKSxcclxuICBQYXJ0aWFsczogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb1BhcnRpYWxzJywgW10pLFxyXG4gIFRlbHVpOiBhbmd1bGFyLm1vZHVsZSgnVGVsVUknKVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc3RhdGVDaGFuZ2VFcnJvcihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSkge1xyXG4gY29uc29sZS5sb2coJyFFVkVOVCEnLCBldmVudCk7XHJcbiBjb25zb2xlLmxvZygnIVRPU1RBVEUhJywgdG9TdGF0ZSk7XHJcbiBjb25zb2xlLmxvZygnIVRPUEFSQU1TIScsIHRvUGFyYW1zKTtcclxuIGNvbnNvbGUubG9nKCckc3RhdGVDaGFuZ2VFcnJvciB0byBcIicgKyB0b1N0YXRlLm5hbWUgKyAnXCIgZnJvbSBzdGF0ZSBcIicgKyBmcm9tU3RhdGUubmFtZSArICdcIi0gZmlyZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBiZWdpbnMuIHRvU3RhdGUsdG9QYXJhbXMgOiBcXG4nLCB0b1N0YXRlLCB0b1BhcmFtcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXRlTm90Zm91bmQoZXZlbnQsIHVuZm91bmRTdGF0ZSwgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcbiAgY29uc29sZS5sb2coJyRzdGF0ZU5vdEZvdW5kICcgKyB1bmZvdW5kU3RhdGUudG8gKyAnICAtIGZpcmVkIHdoZW4gYSBzdGF0ZSBjYW5ub3QgYmUgZm91bmQgYnkgaXRzIG5hbWUuJyk7XHJcbiAgY29uc29sZS5sb2codW5mb3VuZFN0YXRlLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1Zygkcm9vdFNjb3BlKSB7XHJcbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZUVycm9yJyxzdGF0ZUNoYW5nZUVycm9yKTtcclxuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlTm90Rm91bmQnLCBzdGF0ZU5vdGZvdW5kKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuKCRyb290U2NvcGUpIHtcclxuICAkcm9vdFNjb3BlLnNraW4gPSAkcm9vdFNjb3BlLnNraW4gfHwgJ19CbGFuayc7XHJcbiAgZGVidWcoJHJvb3RTY29wZSk7XHJcbn1cclxuXHJcblBpY2tsaXN0RGVtb1xyXG4gIC5BcHBcclxuICAucnVuKHJ1bik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBpY2tsaXN0RGVtbztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=
