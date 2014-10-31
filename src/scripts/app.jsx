/** @jsx React.DOM */

var React = require("react/react.js");
var utils = require("./utils.js");
var CounterWidget = require("./components/counter-widget.jsx");

var pulse = utils.pulse();
var count = 0;

pulse(function render() {
  count++;
  React.render(<CounterWidget />, document.getElementById("container"));
});
