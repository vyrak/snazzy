/** @jsx React.DOM */

var React = require("react/react.js");
var Counter = require("./counter.jsx");
var CounterEditor = require("./counter-editor.jsx");

module.exports = React.createClass({
  displayName: "CounterWidget",
  getInitialState: function() {
    return {
      label: "Woot",
      count: 0
    };
  },
  handleLabelChange: function(label) {
    this.setState({
      label: label,
      count: 0
    });
  },
  render: function() {
    return (
      <div>
        <CounterEditor label={this.state.label} onLabelChange={this.handleLabelChange} />
        <Counter label={this.state.label} count={this.state.count}/>
      </div>
    );
  }
});
