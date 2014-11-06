/** @jsx React.DOM */

var React = require("react/react.js");
var Rx = require("rxjs/dist/rx.all.js");
var CounterWidget = require("./components/counter-widget.jsx");
var DashboardEditor = require("./components/dashboard-editor.jsx");

var stream = Rx.Observable.interval(1000);

function createContainer() {
  var container = document.createElement("div");
  container.className = "container";
  return container;
}
function appendContainer() {
  return document.body.appendChild(createContainer());
}
React.render(<CounterWidget stream={stream} />, appendContainer());
React.render(<DashboardEditor stream={stream} />, appendContainer());
