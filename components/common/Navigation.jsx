var React = require('react');
var MenuButton = require('../elements/MenuButton.jsx');
var UIActions = require('../../actions/UIActions');

module.exports = React.createClass({
  handleClick: function(){
    UIActions.setNavState(this.props.navigationActive ? false : true);
  },
  render: function(){
    return (
      <nav>
        <ul className={this.props.navigationActive ? 'active' : ''}>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
          <li><a href="#">Item 5</a></li>
          <li><a href="#">Item 6</a></li>
        </ul>
        <MenuButton onClick={this.handleClick} active={this.props.navigationActive} />
      </nav>
    )
  }
});