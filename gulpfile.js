var child_process = require("child_process");
var gulp = require("gulp");
var rename = require("gulp-rename");
var gutil = require("gulp-util");
var webpack = require("gulp-webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackBaseConfig = require("./webpack.config");

var child;
var servicePort = parseInt(process.env.PORT, 10) || 8001;
var webpackDevServerPort = servicePort + 10;

function stdout(data) {
  gutil.log(gutil.colors.bgCyan(gutil.colors.black(data.toString().trim())));
}

function stderr(data) {
  gutil.log(gutil.colors.bgRed(gutil.colors.white(data.toString().trim())));
}

gulp.task("default", ["watch"]);

gulp.task("webpack", function() {
  var config = Object.create(webpackBaseConfig);
  return gulp.src("src/scripts/app.jsx")
    .pipe(webpack(config))
    .pipe(rename("app.js"))
    .pipe(gulp.dest("public/scripts"));
});

gulp.task("webpack-dev-server", function(callback) {
  var config = Object.create(webpackBaseConfig);
  var serverOptions = {
    hot: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }
  };

  config.debug = true;
  config.devtool = "eval";
  config.entry = { app: "./src/scripts/app.jsx" };

  new WebpackDevServer(require("webpack")(config), serverOptions).listen(webpackDevServerPort, "localhost", function(err) {
    if (err) {
      throw new gutil.PluginError("webpack-dev-server", err);
    }
    gutil.log("[webpack-dev-server]", "http://localhost:" + webpackDevServerPort + "/webpack-dev-server");
    callback();
  });
});

gulp.task("express", function() {
  if (child) {
    child.kill();
  }
  child = child_process.spawn(process.execPath, ["./service.js"], {
    env: {
      NODE_ENV: process.env.NODE_ENV,
      PORT: servicePort
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

gulp.task("watch", ["webpack-dev-server", "express"], function() {
  gulp.watch(["service.js"], ["express"]);
});
