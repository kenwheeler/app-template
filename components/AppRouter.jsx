var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var App = require('./App.jsx')

module.exports = AppRouter = (
  <Routes>
    <Route handler={App} />
  </Routes>
);