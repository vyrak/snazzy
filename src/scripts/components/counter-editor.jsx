/** @jsx React.DOM */

var React = require("react/react.js");

module.exports = React.createClass({
  displayName: "CounterEditor",
  handleLabelChange: function() {
    this.props.onLabelChange(this.refs.labelTextInput.getDOMNode().value);
  },
  render: function() {
    return (
      <label>
        Label: <input type="text" ref="labelTextInput" defaultValue={this.props.value} onChange={this.handleLabelChange} />
      </label>
    );
  }
});
