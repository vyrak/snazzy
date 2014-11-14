/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({
  displayName: "Counter",
  render: function() {
    return (
      <div className="counter">
        <span className="counter-label">{this.props.label}</span>
        :&nbsp;
        <span className="counter-count">{this.props.count}</span>
      </div>
    );
  }
});
