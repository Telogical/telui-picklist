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