/** @jsx React.DOM */

var React = require("react/react.js");

module.exports = React.createClass({
  displayName: "Counter",
  render: function() {
    return (
      <div className="counter">
        <span>{this.props.label}</span>: <span>{this.props.count}</span>
      </div>
    );
  }
});
