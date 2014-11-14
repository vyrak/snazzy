require('./polyfill-bind.js');
var testsContext = require.context(".", true, /\.jsx?$/);
testsContext.keys().forEach(testsContext);
