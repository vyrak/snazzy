var React = require('../../bower_components/react/react.js');
var utils = require('./utils.js');

var pulse = utils.pulse();
var count = 0, CounterBox;

CounterBox = React.createClass({
  displayName: 'CounterBox',
  render: function() {
    return React.createElement('div', {className: 'counterBox'}, 'Count: ' + count);
  }
});

pulse(function render() {
  count++;
  React.render(React.createElement(CounterBox, null), document.getElementById('container'));
});
