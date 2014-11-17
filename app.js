var React = require('react');
var App = require('./components/App');
var Router = require('./routes');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, picking up where react left off on the server
React.renderComponent(Router, document.body);

// Router.run(routes, Router.HistoryLocation, function(Handler){
//   React.render(<Handler />, document.body);
// });