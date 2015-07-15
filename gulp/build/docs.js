var gulp = require('gulp');

require('./docs/scripts');
require('./docs/styles');

gulp.task('build-docs', ['build-docs-scripts', 'build-docs-styles', 'build-docs-assets']);
