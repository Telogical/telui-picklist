'use strict';

var PicklistDemo = require('../../scripts/app.js');

PicklistDemo
    .Controllers
    .controller('basicConfigurationViewCtrl', function basicConfigurationCtrl($scope, mock) {
        
        var people = mock.entity('people');
    
    
        console.log('people', people.length);
        
        function setPicklistToPerson(person){
          $scope.pickedPeople = [person];
        }
  
        $scope.disabled = false;
        $scope.people = people;
        $scope.setPicklistToPerson = setPicklistToPerson;
    });
