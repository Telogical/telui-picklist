'use strict';

var gulp = require('gulp');

function Scaffold(options) {
    require('./scaffold/feature/task')(options);
    return gulp;
}

module.exports = Scaffold;
