var child_process = require("child_process");
var gulp = require("gulp");
var rename = require("gulp-rename");
var gutil = require("gulp-util");
var webpack = require("gulp-webpack");

var child;

function stdout(data) {
  gutil.log(gutil.colors.bgCyan(gutil.colors.black(data.toString().trim())));
}

function stderr(data) {
  gutil.log(gutil.colors.bgRed(gutil.colors.white(data.toString().trim())));
}

gulp.task("webpack", function() {
  return gulp.src("src/scripts/app.jsx")
    .pipe(webpack({
      resolve: {
        root: __dirname,
        modulesDirectories: ["node_modules", "bower_components"]
      },
      module: {
        loaders: [
          {test: /\.jsx$/, loader: "jsx-loader"}
        ]
      }
    }))
    .pipe(rename("app.js"))
    .pipe(gulp.dest("public/scripts"));
});

gulp.task("express", function() {
  if (child) {
    child.kill();
  }
  child = child_process.spawn(process.execPath, ["./service.js"], {
    env: {
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT
    }
  });
  child.stdout.on("data", stdout);
  child.stderr.on("data", stderr);

  process.on("uncaughtException", function(err) {
    if (child) {
      child.kill();
    }
    throw new Error(err);
  });
});

gulp.task("watch", ["webpack", "express"], function() {
  gulp.watch(["src/scripts/**/*.jsx", "bower_components/**/*.js"], ["webpack"]);
  gulp.watch(["service.js"], ["express"]);
});
