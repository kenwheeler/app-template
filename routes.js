var React = require('react');
var Router = require('react-router');
var App = require('./components/App');
var PostsIndex = require('./components/posts/PostsIndex');
var Routes = Router.Routes;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

module.exports = (
  <Routes location="history">
    <Route name="app" handler={App}>
      <Route name="posts" path="/" handler={PostsIndex} />
    </Route>
  </Routes>
);