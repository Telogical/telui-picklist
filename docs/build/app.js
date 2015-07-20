(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("./docs/scripts/app.js");
require("./docs/features/example-feature/view-controller.js");
require("./docs/features/example-feature/view.js");
require("./docs/features/example-feature-two/view-controller.js");
require("./docs/features/example-feature-two/view.js");

},{"./docs/features/example-feature-two/view-controller.js":2,"./docs/features/example-feature-two/view.js":3,"./docs/features/example-feature/view-controller.js":4,"./docs/features/example-feature/view.js":5,"./docs/scripts/app.js":6}],2:[function(require,module,exports){
'use strict';

var PicklistDemoApp = require('../../scripts/app.js');

PicklistDemoApp
  .Controllers
  .controller('exampleFeatureTwoViewCtrl', function exampleFeatureTwoCtrl($scope) {



  });

},{"../../scripts/app.js":6}],3:[function(require,module,exports){
'use strict';

var PicklistDemoApp = require('../../scripts/app.js');

PicklistDemoApp
  .App
  .config(
    function($stateProvider) {

      var exampleFeatureTwoView = {
        url: '/example-feature-two',
        controller: 'exampleFeatureTwoViewCtrl',
        templateUrl: 'example-feature-two/view-partial.html'
      };

      $stateProvider
        .state('PicklistDemoApp.example-feature-two', exampleFeatureTwoView);
    });

},{"../../scripts/app.js":6}],4:[function(require,module,exports){
'use strict';

var PicklistDemoApp = require('../../scripts/app.js');

PicklistDemoApp
  .Controllers
  .controller('exampleFeatureViewCtrl', function exampleFeatureCtrl($scope) {

      console.log('example-feature-controller-loaded');

  });

},{"../../scripts/app.js":6}],5:[function(require,module,exports){
'use strict';

var PicklistDemoApp = require('../../scripts/app.js');

PicklistDemoApp
  .App
  .config(
    function ($stateProvider) {

      var exampleFeatureView = {
        url: '/example-feature',
        controller: 'exampleFeatureViewCtrl',
        //templateUrl: 'example-feature/view-partial.html'
        template: '<h2>example-feature</h2>'
      };

      $stateProvider
        .state('PicklistDemoApp.example-feature', exampleFeatureView);
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
    .state('PicklistDemoApp', PicklistDemo);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3RyZWFtXzAuanMiLCJkb2NzL2ZlYXR1cmVzL2V4YW1wbGUtZmVhdHVyZS10d28vdmlldy1jb250cm9sbGVyLmpzIiwiZG9jcy9mZWF0dXJlcy9leGFtcGxlLWZlYXR1cmUtdHdvL3ZpZXcuanMiLCJkb2NzL2ZlYXR1cmVzL2V4YW1wbGUtZmVhdHVyZS92aWV3LWNvbnRyb2xsZXIuanMiLCJkb2NzL2ZlYXR1cmVzL2V4YW1wbGUtZmVhdHVyZS92aWV3LmpzIiwiZG9jcy9zY3JpcHRzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlKFwiLi9kb2NzL3NjcmlwdHMvYXBwLmpzXCIpO1xucmVxdWlyZShcIi4vZG9jcy9mZWF0dXJlcy9leGFtcGxlLWZlYXR1cmUvdmlldy1jb250cm9sbGVyLmpzXCIpO1xucmVxdWlyZShcIi4vZG9jcy9mZWF0dXJlcy9leGFtcGxlLWZlYXR1cmUvdmlldy5qc1wiKTtcbnJlcXVpcmUoXCIuL2RvY3MvZmVhdHVyZXMvZXhhbXBsZS1mZWF0dXJlLXR3by92aWV3LWNvbnRyb2xsZXIuanNcIik7XG5yZXF1aXJlKFwiLi9kb2NzL2ZlYXR1cmVzL2V4YW1wbGUtZmVhdHVyZS10d28vdmlldy5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFBpY2tsaXN0RGVtb0FwcCA9IHJlcXVpcmUoJy4uLy4uL3NjcmlwdHMvYXBwLmpzJyk7XG5cblBpY2tsaXN0RGVtb0FwcFxuICAuQ29udHJvbGxlcnNcbiAgLmNvbnRyb2xsZXIoJ2V4YW1wbGVGZWF0dXJlVHdvVmlld0N0cmwnLCBmdW5jdGlvbiBleGFtcGxlRmVhdHVyZVR3b0N0cmwoJHNjb3BlKSB7XG5cblxuXG4gIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGlja2xpc3REZW1vQXBwID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0cy9hcHAuanMnKTtcblxuUGlja2xpc3REZW1vQXBwXG4gIC5BcHBcbiAgLmNvbmZpZyhcbiAgICBmdW5jdGlvbigkc3RhdGVQcm92aWRlcikge1xuXG4gICAgICB2YXIgZXhhbXBsZUZlYXR1cmVUd29WaWV3ID0ge1xuICAgICAgICB1cmw6ICcvZXhhbXBsZS1mZWF0dXJlLXR3bycsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdleGFtcGxlRmVhdHVyZVR3b1ZpZXdDdHJsJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdleGFtcGxlLWZlYXR1cmUtdHdvL3ZpZXctcGFydGlhbC5odG1sJ1xuICAgICAgfTtcblxuICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdQaWNrbGlzdERlbW9BcHAuZXhhbXBsZS1mZWF0dXJlLXR3bycsIGV4YW1wbGVGZWF0dXJlVHdvVmlldyk7XG4gICAgfSk7XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUGlja2xpc3REZW1vQXBwID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0cy9hcHAuanMnKTtcclxuXHJcblBpY2tsaXN0RGVtb0FwcFxyXG4gIC5Db250cm9sbGVyc1xyXG4gIC5jb250cm9sbGVyKCdleGFtcGxlRmVhdHVyZVZpZXdDdHJsJywgZnVuY3Rpb24gZXhhbXBsZUZlYXR1cmVDdHJsKCRzY29wZSkge1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2V4YW1wbGUtZmVhdHVyZS1jb250cm9sbGVyLWxvYWRlZCcpO1xyXG5cclxuICB9KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFBpY2tsaXN0RGVtb0FwcCA9IHJlcXVpcmUoJy4uLy4uL3NjcmlwdHMvYXBwLmpzJyk7XHJcblxyXG5QaWNrbGlzdERlbW9BcHBcclxuICAuQXBwXHJcbiAgLmNvbmZpZyhcclxuICAgIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG5cclxuICAgICAgdmFyIGV4YW1wbGVGZWF0dXJlVmlldyA9IHtcclxuICAgICAgICB1cmw6ICcvZXhhbXBsZS1mZWF0dXJlJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnZXhhbXBsZUZlYXR1cmVWaWV3Q3RybCcsXHJcbiAgICAgICAgLy90ZW1wbGF0ZVVybDogJ2V4YW1wbGUtZmVhdHVyZS92aWV3LXBhcnRpYWwuaHRtbCdcclxuICAgICAgICB0ZW1wbGF0ZTogJzxoMj5leGFtcGxlLWZlYXR1cmU8L2gyPidcclxuICAgICAgfTtcclxuXHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdQaWNrbGlzdERlbW9BcHAuZXhhbXBsZS1mZWF0dXJlJywgZXhhbXBsZUZlYXR1cmVWaWV3KTtcclxuICAgIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciBhcHBEZXBlbmRlbmNpZXMgPSBbXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICdUZWxVSScsXHJcbiAgICAnUGlja2xpc3REZW1vRGlyZWN0aXZlcycsXHJcbiAgICAnUGlja2xpc3REZW1vQ29udHJvbGxlcnMnLFxyXG4gICAgJ1BpY2tsaXN0RGVtb1NlcnZpY2VzJyxcclxuICAgICdQaWNrbGlzdERlbW9WYWx1ZXMnLFxyXG4gICAgJ1BpY2tsaXN0RGVtb1BhcnRpYWxzJyxcclxuXTtcclxuXHJcbnZhciBQaWNrbGlzdERlbW8gPSB7XHJcbiAgQXBwOiBhbmd1bGFyLm1vZHVsZSgnUGlja2xpc3REZW1vQXBwJywgYXBwRGVwZW5kZW5jaWVzKSxcclxuICBEaXJlY3RpdmVzOiBhbmd1bGFyLm1vZHVsZSgnUGlja2xpc3REZW1vRGlyZWN0aXZlcycsIFtdKSxcclxuICBDb250cm9sbGVyczogYW5ndWxhci5tb2R1bGUoJ1BpY2tsaXN0RGVtb0NvbnRyb2xsZXJzJywgW10pLFxyXG4gIFNlcnZpY2VzOiBhbmd1bGFyLm1vZHVsZSgnUGlja2xpc3REZW1vU2VydmljZXMnLCBbXSksXHJcbiAgVmFsdWVzOiBhbmd1bGFyLm1vZHVsZSgnUGlja2xpc3REZW1vVmFsdWVzJywgW10pLFxyXG4gIFBhcnRpYWxzOiBhbmd1bGFyLm1vZHVsZSgnUGlja2xpc3REZW1vUGFydGlhbHMnLCBbXSksXHJcbiAgVGVsdWk6IGFuZ3VsYXIubW9kdWxlKCdUZWxVSScpXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdGF0ZUNoYW5nZUVycm9yKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlKSB7XHJcbiBjb25zb2xlLmxvZygnIUVWRU5UIScsIGV2ZW50KTtcclxuIGNvbnNvbGUubG9nKCchVE9TVEFURSEnLCB0b1N0YXRlKTtcclxuIGNvbnNvbGUubG9nKCchVE9QQVJBTVMhJywgdG9QYXJhbXMpO1xyXG4gY29uc29sZS5sb2coJyRzdGF0ZUNoYW5nZUVycm9yIHRvIFwiJyArIHRvU3RhdGUubmFtZSArICdcIiBmcm9tIHN0YXRlIFwiJyArIGZyb21TdGF0ZS5uYW1lICsgJ1wiLSBmaXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uIGJlZ2lucy4gdG9TdGF0ZSx0b1BhcmFtcyA6IFxcbicsIHRvU3RhdGUsIHRvUGFyYW1zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhdGVOb3Rmb3VuZChldmVudCwgdW5mb3VuZFN0YXRlLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuICBjb25zb2xlLmxvZygnJHN0YXRlTm90Rm91bmQgJyArIHVuZm91bmRTdGF0ZS50byArICcgIC0gZmlyZWQgd2hlbiBhIHN0YXRlIGNhbm5vdCBiZSBmb3VuZCBieSBpdHMgbmFtZS4nKTtcclxuICBjb25zb2xlLmxvZyh1bmZvdW5kU3RhdGUsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRTdGF0ZVByb3ZpZGVyKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgdmFyIFBpY2tsaXN0RGVtbyA9IHtcclxuICAgIHVybDogJycsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXYgZGF0YS11aS12aWV3IGNsYXNzPVwid2FmZmxlc1wiPjwvZGl2PidcclxuICB9O1xyXG5cclxuICAkc3RhdGVQcm92aWRlclxyXG4gICAgLnN0YXRlKCdQaWNrbGlzdERlbW9BcHAnLCBQaWNrbGlzdERlbW8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1Zygkcm9vdFNjb3BlKSB7XHJcbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZUVycm9yJyxzdGF0ZUNoYW5nZUVycm9yKTtcclxuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlTm90Rm91bmQnLCBzdGF0ZU5vdGZvdW5kKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuKCRyb290U2NvcGUpIHtcclxuICAkcm9vdFNjb3BlLmJ1aWxkRm9sZGVyID0gJ19idWlsZCc7XHJcbiAgJHJvb3RTY29wZS5za2luID0gJHJvb3RTY29wZS5za2luIHx8ICdfQmxhbmsnO1xyXG4gIGRlYnVnKCRyb290U2NvcGUpO1xyXG59XHJcblxyXG5QaWNrbGlzdERlbW9cclxuICAuQXBwXHJcbiAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsIGRlZmF1bHRTdGF0ZVByb3ZpZGVyXSlcclxuICAucnVuKFsnJHJvb3RTY29wZScsIHJ1bl0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQaWNrbGlzdERlbW87XHJcbiJdfQ==
