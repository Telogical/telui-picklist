

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





























