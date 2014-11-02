var fs = require("fs");
var path = require("path");
var express = require("express");

var app = express();
var port = parseInt(process.env.PORT, 10) || 8001;

function html() {
  return fs.readFileSync(path.join(process.cwd(), "src", "index.html"), { encoding: "utf8" });
}

app.use("/", express.static(path.join(process.cwd(), "public")));
app.use("/styles", express.static(path.join(process.cwd(), "bower_components")));

app.get("/", function(req, res) {
  res.send(html());
});

var server = app.listen(port, function() {
  console.log("Server started on port %d", server.address().port);
});
