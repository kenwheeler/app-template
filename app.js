var React = require('react');
var Router = require('./routes');

var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

React.render(Router, document.body);
