var path = require("path");

module.exports = {
  context: __dirname,
  module: {
    loaders: [
      {test: /\.jsx$/, loader: "jsx-loader"}
    ]
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[chunkhash].js",
    path: path.join(__dirname, "public", "scripts"),
    publicPath: "/scripts/"
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ["node_modules", "bower_components"]
  }
};
