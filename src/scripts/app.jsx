/** @jsx React.DOM */

var CounterBox
  , React = require("../../bower_components/react/react.js")
  , utils = require("./utils.js");

var pulse = utils.pulse();
var count = 0, CounterBox;

CounterBox = React.createClass({
  displayName: "CounterBox",
  render: function() {
    return (
      <div className="counterBox">
        <span>{this.props.label}</span>: <span>{this.props.count}</span>
      </div>
    );
  }
});

pulse(function render() {
  count++;
  React.render(<CounterBox label="Woot" count={count}/>, document.getElementById("container"));
});
