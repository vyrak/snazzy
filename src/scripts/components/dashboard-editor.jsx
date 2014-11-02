/** @jsx React.DOM */

var React = require("react/react.js");

module.exports = React.createClass({
  displayName: "DashboardEditor",
  handleLabelChange: function() {
    this.props.onLabelChange(this.refs.labelTextInput.getDOMNode().value);
  },
  render: function() {
    var i, children = [];
    for (i = 0; i < 7; i++) {
      children.push(
        <div className="col-md-4">.col-md-4</div>
      );
    }
    return (
      <div className="row">{children}</div>
    );
  }
});
