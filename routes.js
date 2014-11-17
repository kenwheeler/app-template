var React = require('react');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;

var AppRoutes = (
  <Routes location="history">
    <Route name="app" handler={require('./components/App')}>
      <Route name="home" path="/" handler={require('./components/home/HomeIndex')} />
      <Route name="posts" path="/posts" handler={require('./components/posts/PostsIndex')} />
      <Route name="account" path="/account" handler={require('./components/account/AccountIndex')} />
    </Route>
  </Routes>
);

module.exports = AppRoutes;