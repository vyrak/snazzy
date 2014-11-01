/** @jsx React.DOM */

var React = require("react/react.js");
var Rx = require("rxjs/dist/rx.all.js");
var CounterWidget = require("./components/counter-widget.jsx");

var stream = Rx.Observable.interval(1000);

React.render(<CounterWidget stream={stream} />, document.getElementById("container"));
