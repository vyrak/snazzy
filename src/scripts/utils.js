module.exports = {
  pulse: function pulseFactory(ms) {
    return function pulse(func) {
      func();
      setTimeout(function() { pulse(func); }, ms || 1000);
    };
  }
};
