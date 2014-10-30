var gulp = require('gulp');
var gutil = require('gulp-util');
var child_process = require('child_process');

var child;

gulp.task('express', function() {
  if(child) {
    child.kill();
  }
  child = child_process.spawn(process.execPath, ['./service.js'], {
    env: {
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT
    }
  });
  child.stdout.on('data', function(data) {
    gutil.log(gutil.colors.bgCyan(gutil.colors.black(data.toString().trim())));
  });
  child.stderr.on('data', function(data) {
    gutil.log(gutil.colors.bgRed(gutil.colors.white(data.toString().trim())));
  });

  process.on('uncaughtException', function(err) {
    if(child) {
      child.kill();
    }
    throw new Error(err);
  });
});

gulp.task('watch', function() {
  gulp.watch(['service.js'], ['express']);
});
