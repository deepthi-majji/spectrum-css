var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb) {
  runSequence(
    // 'lint', // Disabled for now
    'clean',
    'balthazar',
    'build-css',
    'build-docs',
    cb
  );
});

gulp.task('build:lite', function(cb) {
  runSequence(
    'build-css',
    'build-docs',
    cb
  );
});
