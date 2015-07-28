'use strict';

var gulp = require('gulp');
var plato = require('plato');

function Complexity(options) {

    var defaultJsHintOpts = {
        strict: true,
        curly: true,
        unused: true,
        undef: true,
        node: true
    };

    var defaultComplexity = {
        trycatch: true,
        newmi: true
    };

    var outputDir = './docs/artifacts/plato';

    var src = ['./src/**/*.js', './index.js', './react/**/*.js'];


    var platoArgs = {
        jshint: defaultJsHintOpts,
        complexity: defaultComplexity
    };

    function analysisComplexity() {
        function callback() {

        }

        plato.inspect(src, outputDir, platoArgs, callback);
    }

    gulp.task('analysis-complexity', analysisComplexity);

    return gulp;
}

module.exports = Complexity;
