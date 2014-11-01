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
  componentDidMount: function() {
    var self = this;
    this.props.stream.subscribe(function() {
      self.setState({count: self.state.count + 1});
    });
  },
  handleLabelChange: function(label) {
    this.setState({label: label});
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
