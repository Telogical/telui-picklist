(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("./docs/scripts/app.js");
require("./docs/features/basic-configuration/view-controller.js");
require("./docs/features/basic-configuration/view.js");
require("./docs/features/changing-states/view-controller.js");
require("./docs/features/changing-states/view.js");
require("./docs/features/mock/mock.js");

},{"./docs/features/basic-configuration/view-controller.js":2,"./docs/features/basic-configuration/view.js":3,"./docs/features/changing-states/view-controller.js":4,"./docs/features/changing-states/view.js":5,"./docs/features/mock/mock.js":6,"./docs/scripts/app.js":9}],2:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .Controllers
  .controller('basicConfigurationViewCtrl', function basicConfigurationCtrl($scope, mock) {

      
      var people = mock.entity('people');
  
      console.log(people);
  });

},{"../../scripts/app.js":9}],3:[function(require,module,exports){
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

},{"../../scripts/app.js":9}],4:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .Controllers
  .controller('changingStatesViewCtrl', function changingStatesCtrl($scope) {



  });

},{"../../scripts/app.js":9}],5:[function(require,module,exports){
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

},{"../../scripts/app.js":9}],6:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

console.log('PicklistDemo', PicklistDemo)

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
},{"../../scripts/app.js":9,"./schemas/people":7,"./schemas/person":8}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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

function defaultStateProvider($stateProvider) {
  var PicklistDemo = {
    url: '',
    template: '<div data-ui-view class="waffles"></div>'
  };

  $stateProvider
    .state('PicklistDemo', PicklistDemo);
}

function debug($rootScope) {
  $rootScope.$on('$stateChangeError',stateChangeError);
  $rootScope.$on('$stateNotFound', stateNotfound);
}

function run($rootScope) {
  $rootScope.buildFolder = '_build';
  $rootScope.skin = $rootScope.skin || '_Blank';
  debug($rootScope);
}

PicklistDemo
  .App
  .config(['$stateProvider', '$urlRouterProvider', defaultStateProvider])
  .run(['$rootScope', run]);

module.exports = PicklistDemo;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3RyZWFtXzAuanMiLCJkb2NzL2ZlYXR1cmVzL2Jhc2ljLWNvbmZpZ3VyYXRpb24vdmlldy1jb250cm9sbGVyLmpzIiwiZG9jcy9mZWF0dXJlcy9iYXNpYy1jb25maWd1cmF0aW9uL3ZpZXcuanMiLCJkb2NzL2ZlYXR1cmVzL2NoYW5naW5nLXN0YXRlcy92aWV3LWNvbnRyb2xsZXIuanMiLCJkb2NzL2ZlYXR1cmVzL2NoYW5naW5nLXN0YXRlcy92aWV3LmpzIiwiZG9jcy9mZWF0dXJlcy9tb2NrL21vY2suanMiLCJkb2NzL2ZlYXR1cmVzL21vY2svc2NoZW1hcy9wZW9wbGUuanNvbiIsImRvY3MvZmVhdHVyZXMvbW9jay9zY2hlbWFzL3BlcnNvbi5qc29uIiwiZG9jcy9zY3JpcHRzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlKFwiLi9kb2NzL3NjcmlwdHMvYXBwLmpzXCIpO1xucmVxdWlyZShcIi4vZG9jcy9mZWF0dXJlcy9iYXNpYy1jb25maWd1cmF0aW9uL3ZpZXctY29udHJvbGxlci5qc1wiKTtcbnJlcXVpcmUoXCIuL2RvY3MvZmVhdHVyZXMvYmFzaWMtY29uZmlndXJhdGlvbi92aWV3LmpzXCIpO1xucmVxdWlyZShcIi4vZG9jcy9mZWF0dXJlcy9jaGFuZ2luZy1zdGF0ZXMvdmlldy1jb250cm9sbGVyLmpzXCIpO1xucmVxdWlyZShcIi4vZG9jcy9mZWF0dXJlcy9jaGFuZ2luZy1zdGF0ZXMvdmlldy5qc1wiKTtcbnJlcXVpcmUoXCIuL2RvY3MvZmVhdHVyZXMvbW9jay9tb2NrLmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFBpY2tsaXN0RGVtbyA9IHJlcXVpcmUoJy4uLy4uL3NjcmlwdHMvYXBwLmpzJyk7XHJcblxyXG5QaWNrbGlzdERlbW9cclxuICAuQ29udHJvbGxlcnNcclxuICAuY29udHJvbGxlcignYmFzaWNDb25maWd1cmF0aW9uVmlld0N0cmwnLCBmdW5jdGlvbiBiYXNpY0NvbmZpZ3VyYXRpb25DdHJsKCRzY29wZSwgbW9jaykge1xyXG5cclxuICAgICAgXHJcbiAgICAgIHZhciBwZW9wbGUgPSBtb2NrLmVudGl0eSgncGVvcGxlJyk7XHJcbiAgXHJcbiAgICAgIGNvbnNvbGUubG9nKHBlb3BsZSk7XHJcbiAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL2FwcC5qcycpO1xyXG5cclxuUGlja2xpc3REZW1vXHJcbiAgLkFwcFxyXG4gIC5jb25maWcoXHJcbiAgICBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgIHZhciBiYXNpY0NvbmZpZ3VyYXRpb25WaWV3ID0ge1xyXG4gICAgICAgIHVybDogJy9iYXNpYy1jb25maWd1cmF0aW9uJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnYmFzaWNDb25maWd1cmF0aW9uVmlld0N0cmwnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYmFzaWMtY29uZmlndXJhdGlvbi92aWV3LXBhcnRpYWwuaHRtbCdcclxuICAgICAgfTtcclxuXHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdQaWNrbGlzdERlbW8uYmFzaWMtY29uZmlndXJhdGlvbicsIGJhc2ljQ29uZmlndXJhdGlvblZpZXcpO1xyXG4gICAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL2FwcC5qcycpO1xyXG5cclxuUGlja2xpc3REZW1vXHJcbiAgLkNvbnRyb2xsZXJzXHJcbiAgLmNvbnRyb2xsZXIoJ2NoYW5naW5nU3RhdGVzVmlld0N0cmwnLCBmdW5jdGlvbiBjaGFuZ2luZ1N0YXRlc0N0cmwoJHNjb3BlKSB7XHJcblxyXG5cclxuXHJcbiAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL2FwcC5qcycpO1xyXG5cclxuUGlja2xpc3REZW1vXHJcbiAgLkFwcFxyXG4gIC5jb25maWcoXHJcbiAgICBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgIHZhciBjaGFuZ2luZ1N0YXRlc1ZpZXcgPSB7XHJcbiAgICAgICAgdXJsOiAnL2NoYW5naW5nLXN0YXRlcycsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ2NoYW5naW5nU3RhdGVzVmlld0N0cmwnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnY2hhbmdpbmctc3RhdGVzL3ZpZXctcGFydGlhbC5odG1sJ1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ1BpY2tsaXN0RGVtby5jaGFuZ2luZy1zdGF0ZXMnLCBjaGFuZ2luZ1N0YXRlc1ZpZXcpO1xyXG4gICAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL2FwcC5qcycpO1xyXG5cclxuY29uc29sZS5sb2coJ1BpY2tsaXN0RGVtbycsIFBpY2tsaXN0RGVtbylcclxuXHJcbnZhciBzY2hlbWFzID0ge1xyXG4gIHBlb3BsZSA6IHJlcXVpcmUoJy4vc2NoZW1hcy9wZW9wbGUnKSxcclxuICBwZXJzb24gOiByZXF1aXJlKCcuL3NjaGVtYXMvcGVyc29uJylcclxufTtcclxuXHJcblBpY2tsaXN0RGVtb1xyXG4gIC5TZXJ2aWNlc1xyXG4gIC5zZXJ2aWNlKCdtb2NrJywgZnVuY3Rpb24gbW9ja0xpc3QoKXtcclxuICBcclxuICAgIGZ1bmN0aW9uIG1vY2tFbnRpdHkoZW50aXR5TmFtZSl7XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhzY2hlbWFzKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICB0aGlzLmVudGl0eSA9IG1vY2tFbnRpdHk7XHJcbiAgICBcclxuICB9KTsiLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJ0aXRsZVwiOiBcIkV4YW1wbGUgUGVvcGxlIFNjaGVtYVwiLFxyXG5cdFwidHlwZVwiOiBcImFycmF5XCIsXHJcbiAgICBcIm1pbkl0ZW1zXCI6IFwiMVwiLFxyXG5cdFwiaXRlbXNcIjoge1xyXG4gICAgICBcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgIFwiZmlyc3ROYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibGFzdE5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJhZ2VcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFnZSBpbiB5ZWFyc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50ZWdlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbXVtXCI6IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzPXtcclxuXHRcInRpdGxlXCI6IFwiRXhhbXBsZSBQZXJzb24gU2NoZW1hXCIsXHJcblx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcblx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuXHRcdFwiZmlyc3ROYW1lXCI6IHtcclxuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCJcclxuXHRcdH0sXHJcblx0XHRcImxhc3ROYW1lXCI6IHtcclxuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCJcclxuXHRcdH0sXHJcblx0XHRcImFnZVwiOiB7XHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJBZ2UgaW4geWVhcnNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiaW50ZWdlclwiLFxyXG5cdFx0XHRcIm1pbmltdW1cIjogMFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0XCJyZXF1aXJlZFwiOiBbXCJmaXJzdE5hbWVcIiwgXCJsYXN0TmFtZVwiXVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgYXBwRGVwZW5kZW5jaWVzID0gW1xyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAnVGVsVUknLFxyXG4gICAgJ1BpY2tsaXN0RGVtb0RpcmVjdGl2ZXMnLFxyXG4gICAgJ1BpY2tsaXN0RGVtb0NvbnRyb2xsZXJzJyxcclxuICAgICdQaWNrbGlzdERlbW9TZXJ2aWNlcycsXHJcbiAgICAnUGlja2xpc3REZW1vVmFsdWVzJyxcclxuICAgICdQaWNrbGlzdERlbW9QYXJ0aWFscycsXHJcbl07XHJcblxyXG52YXIgUGlja2xpc3REZW1vID0ge1xyXG4gIEFwcDogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb0FwcCcsIGFwcERlcGVuZGVuY2llcyksXHJcbiAgRGlyZWN0aXZlczogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb0RpcmVjdGl2ZXMnLCBbXSksXHJcbiAgQ29udHJvbGxlcnM6IGFuZ3VsYXIubW9kdWxlKCdQaWNrbGlzdERlbW9Db250cm9sbGVycycsIFtdKSxcclxuICBTZXJ2aWNlczogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb1NlcnZpY2VzJywgW10pLFxyXG4gIFZhbHVlczogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb1ZhbHVlcycsIFtdKSxcclxuICBQYXJ0aWFsczogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb1BhcnRpYWxzJywgW10pLFxyXG4gIFRlbHVpOiBhbmd1bGFyLm1vZHVsZSgnVGVsVUknKVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc3RhdGVDaGFuZ2VFcnJvcihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSkge1xyXG4gY29uc29sZS5sb2coJyFFVkVOVCEnLCBldmVudCk7XHJcbiBjb25zb2xlLmxvZygnIVRPU1RBVEUhJywgdG9TdGF0ZSk7XHJcbiBjb25zb2xlLmxvZygnIVRPUEFSQU1TIScsIHRvUGFyYW1zKTtcclxuIGNvbnNvbGUubG9nKCckc3RhdGVDaGFuZ2VFcnJvciB0byBcIicgKyB0b1N0YXRlLm5hbWUgKyAnXCIgZnJvbSBzdGF0ZSBcIicgKyBmcm9tU3RhdGUubmFtZSArICdcIi0gZmlyZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBiZWdpbnMuIHRvU3RhdGUsdG9QYXJhbXMgOiBcXG4nLCB0b1N0YXRlLCB0b1BhcmFtcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXRlTm90Zm91bmQoZXZlbnQsIHVuZm91bmRTdGF0ZSwgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcbiAgY29uc29sZS5sb2coJyRzdGF0ZU5vdEZvdW5kICcgKyB1bmZvdW5kU3RhdGUudG8gKyAnICAtIGZpcmVkIHdoZW4gYSBzdGF0ZSBjYW5ub3QgYmUgZm91bmQgYnkgaXRzIG5hbWUuJyk7XHJcbiAgY29uc29sZS5sb2codW5mb3VuZFN0YXRlLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0U3RhdGVQcm92aWRlcigkc3RhdGVQcm92aWRlcikge1xyXG4gIHZhciBQaWNrbGlzdERlbW8gPSB7XHJcbiAgICB1cmw6ICcnLFxyXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGRhdGEtdWktdmlldyBjbGFzcz1cIndhZmZsZXNcIj48L2Rpdj4nXHJcbiAgfTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZSgnUGlja2xpc3REZW1vJywgUGlja2xpc3REZW1vKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVidWcoJHJvb3RTY29wZSkge1xyXG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VFcnJvcicsc3RhdGVDaGFuZ2VFcnJvcik7XHJcbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZU5vdEZvdW5kJywgc3RhdGVOb3Rmb3VuZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1bigkcm9vdFNjb3BlKSB7XHJcbiAgJHJvb3RTY29wZS5idWlsZEZvbGRlciA9ICdfYnVpbGQnO1xyXG4gICRyb290U2NvcGUuc2tpbiA9ICRyb290U2NvcGUuc2tpbiB8fCAnX0JsYW5rJztcclxuICBkZWJ1Zygkcm9vdFNjb3BlKTtcclxufVxyXG5cclxuUGlja2xpc3REZW1vXHJcbiAgLkFwcFxyXG4gIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBkZWZhdWx0U3RhdGVQcm92aWRlcl0pXHJcbiAgLnJ1bihbJyRyb290U2NvcGUnLCBydW5dKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGlja2xpc3REZW1vO1xyXG4iXX0=
