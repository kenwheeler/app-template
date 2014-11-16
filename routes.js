var JSX = require('node-jsx').install(),
  React = require('react'),
  Router = require('react-router'),
  App = require('./components/App.jsx');

module.exports = {

  route: function(req, res) {
      markup = 'test';
      state = {
        test: 2
      };
      // Render our 'home' template
      res.render('index', {
        markup: markup, // Pass rendered react markup
        state: JSON.stringify(state)
      });
  }

}