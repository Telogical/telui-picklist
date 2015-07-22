(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("./docs/scripts/app.js");
require("./docs/features/basic-configuration/view-controller.js");
require("./docs/features/basic-configuration/view.js");
require("./docs/features/changing-states/view-controller.js");
require("./docs/features/changing-states/view.js");

},{"./docs/features/basic-configuration/view-controller.js":2,"./docs/features/basic-configuration/view.js":3,"./docs/features/changing-states/view-controller.js":4,"./docs/features/changing-states/view.js":5,"./docs/scripts/app.js":6}],2:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .Controllers
  .controller('basicConfigurationViewCtrl', function basicConfigurationCtrl($scope) {



  });

},{"../../scripts/app.js":6}],3:[function(require,module,exports){
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

},{"../../scripts/app.js":6}],4:[function(require,module,exports){
'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
  .Controllers
  .controller('changingStatesViewCtrl', function changingStatesCtrl($scope) {



  });

},{"../../scripts/app.js":6}],5:[function(require,module,exports){
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

},{"../../scripts/app.js":6}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3RyZWFtXzAuanMiLCJkb2NzL2ZlYXR1cmVzL2Jhc2ljLWNvbmZpZ3VyYXRpb24vdmlldy1jb250cm9sbGVyLmpzIiwiZG9jcy9mZWF0dXJlcy9iYXNpYy1jb25maWd1cmF0aW9uL3ZpZXcuanMiLCJkb2NzL2ZlYXR1cmVzL2NoYW5naW5nLXN0YXRlcy92aWV3LWNvbnRyb2xsZXIuanMiLCJkb2NzL2ZlYXR1cmVzL2NoYW5naW5nLXN0YXRlcy92aWV3LmpzIiwiZG9jcy9zY3JpcHRzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZShcIi4vZG9jcy9zY3JpcHRzL2FwcC5qc1wiKTtcbnJlcXVpcmUoXCIuL2RvY3MvZmVhdHVyZXMvYmFzaWMtY29uZmlndXJhdGlvbi92aWV3LWNvbnRyb2xsZXIuanNcIik7XG5yZXF1aXJlKFwiLi9kb2NzL2ZlYXR1cmVzL2Jhc2ljLWNvbmZpZ3VyYXRpb24vdmlldy5qc1wiKTtcbnJlcXVpcmUoXCIuL2RvY3MvZmVhdHVyZXMvY2hhbmdpbmctc3RhdGVzL3ZpZXctY29udHJvbGxlci5qc1wiKTtcbnJlcXVpcmUoXCIuL2RvY3MvZmVhdHVyZXMvY2hhbmdpbmctc3RhdGVzL3ZpZXcuanNcIik7XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUGlja2xpc3REZW1vID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0cy9hcHAuanMnKTtcclxuXHJcblBpY2tsaXN0RGVtb1xyXG4gIC5Db250cm9sbGVyc1xyXG4gIC5jb250cm9sbGVyKCdiYXNpY0NvbmZpZ3VyYXRpb25WaWV3Q3RybCcsIGZ1bmN0aW9uIGJhc2ljQ29uZmlndXJhdGlvbkN0cmwoJHNjb3BlKSB7XHJcblxyXG5cclxuXHJcbiAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL2FwcC5qcycpO1xyXG5cclxuUGlja2xpc3REZW1vXHJcbiAgLkFwcFxyXG4gIC5jb25maWcoXHJcbiAgICBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgIHZhciBiYXNpY0NvbmZpZ3VyYXRpb25WaWV3ID0ge1xyXG4gICAgICAgIHVybDogJy9iYXNpYy1jb25maWd1cmF0aW9uJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnYmFzaWNDb25maWd1cmF0aW9uVmlld0N0cmwnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYmFzaWMtY29uZmlndXJhdGlvbi92aWV3LXBhcnRpYWwuaHRtbCdcclxuICAgICAgfTtcclxuXHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdQaWNrbGlzdERlbW8uYmFzaWMtY29uZmlndXJhdGlvbicsIGJhc2ljQ29uZmlndXJhdGlvblZpZXcpO1xyXG4gICAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL2FwcC5qcycpO1xyXG5cclxuUGlja2xpc3REZW1vXHJcbiAgLkNvbnRyb2xsZXJzXHJcbiAgLmNvbnRyb2xsZXIoJ2NoYW5naW5nU3RhdGVzVmlld0N0cmwnLCBmdW5jdGlvbiBjaGFuZ2luZ1N0YXRlc0N0cmwoJHNjb3BlKSB7XHJcblxyXG5cclxuXHJcbiAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL2FwcC5qcycpO1xyXG5cclxuUGlja2xpc3REZW1vXHJcbiAgLkFwcFxyXG4gIC5jb25maWcoXHJcbiAgICBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgIHZhciBjaGFuZ2luZ1N0YXRlc1ZpZXcgPSB7XHJcbiAgICAgICAgdXJsOiAnL2NoYW5naW5nLXN0YXRlcycsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ2NoYW5naW5nU3RhdGVzVmlld0N0cmwnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnY2hhbmdpbmctc3RhdGVzL3ZpZXctcGFydGlhbC5odG1sJ1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ1BpY2tsaXN0RGVtby5jaGFuZ2luZy1zdGF0ZXMnLCBjaGFuZ2luZ1N0YXRlc1ZpZXcpO1xyXG4gICAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGFwcERlcGVuZGVuY2llcyA9IFtcclxuICAgICd1aS5yb3V0ZXInLFxyXG4gICAgJ1RlbFVJJyxcclxuICAgICdQaWNrbGlzdERlbW9EaXJlY3RpdmVzJyxcclxuICAgICdQaWNrbGlzdERlbW9Db250cm9sbGVycycsXHJcbiAgICAnUGlja2xpc3REZW1vU2VydmljZXMnLFxyXG4gICAgJ1BpY2tsaXN0RGVtb1ZhbHVlcycsXHJcbiAgICAnUGlja2xpc3REZW1vUGFydGlhbHMnLFxyXG5dO1xyXG5cclxudmFyIFBpY2tsaXN0RGVtbyA9IHtcclxuICBBcHA6IGFuZ3VsYXIubW9kdWxlKCdQaWNrbGlzdERlbW9BcHAnLCBhcHBEZXBlbmRlbmNpZXMpLFxyXG4gIERpcmVjdGl2ZXM6IGFuZ3VsYXIubW9kdWxlKCdQaWNrbGlzdERlbW9EaXJlY3RpdmVzJywgW10pLFxyXG4gIENvbnRyb2xsZXJzOiBhbmd1bGFyLm1vZHVsZSgnUGlja2xpc3REZW1vQ29udHJvbGxlcnMnLCBbXSksXHJcbiAgU2VydmljZXM6IGFuZ3VsYXIubW9kdWxlKCdQaWNrbGlzdERlbW9TZXJ2aWNlcycsIFtdKSxcclxuICBWYWx1ZXM6IGFuZ3VsYXIubW9kdWxlKCdQaWNrbGlzdERlbW9WYWx1ZXMnLCBbXSksXHJcbiAgUGFydGlhbHM6IGFuZ3VsYXIubW9kdWxlKCdQaWNrbGlzdERlbW9QYXJ0aWFscycsIFtdKSxcclxuICBUZWx1aTogYW5ndWxhci5tb2R1bGUoJ1RlbFVJJylcclxufTtcclxuXHJcbmZ1bmN0aW9uIHN0YXRlQ2hhbmdlRXJyb3IoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUpIHtcclxuIGNvbnNvbGUubG9nKCchRVZFTlQhJywgZXZlbnQpO1xyXG4gY29uc29sZS5sb2coJyFUT1NUQVRFIScsIHRvU3RhdGUpO1xyXG4gY29uc29sZS5sb2coJyFUT1BBUkFNUyEnLCB0b1BhcmFtcyk7XHJcbiBjb25zb2xlLmxvZygnJHN0YXRlQ2hhbmdlRXJyb3IgdG8gXCInICsgdG9TdGF0ZS5uYW1lICsgJ1wiIGZyb20gc3RhdGUgXCInICsgZnJvbVN0YXRlLm5hbWUgKyAnXCItIGZpcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gYmVnaW5zLiB0b1N0YXRlLHRvUGFyYW1zIDogXFxuJywgdG9TdGF0ZSwgdG9QYXJhbXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGF0ZU5vdGZvdW5kKGV2ZW50LCB1bmZvdW5kU3RhdGUsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG4gIGNvbnNvbGUubG9nKCckc3RhdGVOb3RGb3VuZCAnICsgdW5mb3VuZFN0YXRlLnRvICsgJyAgLSBmaXJlZCB3aGVuIGEgc3RhdGUgY2Fubm90IGJlIGZvdW5kIGJ5IGl0cyBuYW1lLicpO1xyXG4gIGNvbnNvbGUubG9nKHVuZm91bmRTdGF0ZSwgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVmYXVsdFN0YXRlUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcclxuICB2YXIgUGlja2xpc3REZW1vID0ge1xyXG4gICAgdXJsOiAnJyxcclxuICAgIHRlbXBsYXRlOiAnPGRpdiBkYXRhLXVpLXZpZXcgY2xhc3M9XCJ3YWZmbGVzXCI+PC9kaXY+J1xyXG4gIH07XHJcblxyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoJ1BpY2tsaXN0RGVtbycsIFBpY2tsaXN0RGVtbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKCRyb290U2NvcGUpIHtcclxuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlRXJyb3InLHN0YXRlQ2hhbmdlRXJyb3IpO1xyXG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVOb3RGb3VuZCcsIHN0YXRlTm90Zm91bmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW4oJHJvb3RTY29wZSkge1xyXG4gICRyb290U2NvcGUuYnVpbGRGb2xkZXIgPSAnX2J1aWxkJztcclxuICAkcm9vdFNjb3BlLnNraW4gPSAkcm9vdFNjb3BlLnNraW4gfHwgJ19CbGFuayc7XHJcbiAgZGVidWcoJHJvb3RTY29wZSk7XHJcbn1cclxuXHJcblBpY2tsaXN0RGVtb1xyXG4gIC5BcHBcclxuICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgZGVmYXVsdFN0YXRlUHJvdmlkZXJdKVxyXG4gIC5ydW4oWyckcm9vdFNjb3BlJywgcnVuXSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBpY2tsaXN0RGVtbztcclxuIl19
