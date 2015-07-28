'use strict';

var PicklistDemo = require('../../scripts/app.js');
var jsf = require('json-schema-faker');

console.log('PicklistDemo', PicklistDemo);

var schemas = {
  people: require('./schemas/people'),
  person : require('./schemas/person')
};

PicklistDemo
  .Services
  .service('mock', function mockList(){

    function mockEntity(entityName){

      var peeper = jsf(schemas.people);

      console.log(peeper);
    }


    this.entity = mockEntity;

  });
