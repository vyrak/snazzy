var React = require("react/addons");
var Counter = require("src/scripts/components/counter.jsx");

var tu = React.addons.TestUtils;
var subject;

describe("Counter", function() {
  beforeEach(function() {
    subject = tu.renderIntoDocument(
      <Counter label="something" count="5" />
    );
  });

  it("displays label", function() {
    var label = tu.findRenderedDOMComponentWithClass(subject, 'counter-label');
    expect(label.getDOMNode().textContent).toEqual("something");
  });

  it("displays count", function() {
    var label = tu.findRenderedDOMComponentWithClass(subject, 'counter-count');
    expect(label.getDOMNode().textContent).toEqual("5");
  });
});
