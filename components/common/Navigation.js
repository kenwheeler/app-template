var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var MenuButton = require('../elements/MenuButton');
var UIActions = require('../../actions/UIActions');

module.exports = React.createClass({
  handleClick: function(){
    UIActions.setNavState(this.props.navigationActive ? false : true);
  },
  render: function(){
    return (
      <nav>
        <ul className={this.props.navigationActive ? 'active' : ''}>
          <li><Link to="home" onClick={this.handleClick}>Home</Link></li>
          <li><Link to="posts" onClick={this.handleClick}>Posts</Link></li>
          <li><Link to="account" onClick={this.handleClick}>Account</Link></li>
        </ul>
        <MenuButton onClick={this.handleClick} active={this.props.navigationActive} />
      </nav>
    )
  }
});