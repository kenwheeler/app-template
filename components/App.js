var React =  require('react');
var Header = require('./common/Header');
var Navigation = require('./common/Navigation');
var UIStore = require('../stores/UIStore');


function getState() {
  return {
    navigationActive: UIStore.getNavState()
  }
}

var App = React.createClass({

  mixins: [UIStore.mixin],

  getInitialState: function(){
    return getState();
  },

  onChange: function() {
    this.setState(getState());
  },

  render: function(){

    return (
      <div className="container">
        <Header />
        <Navigation navigationActive={this.state.navigationActive} />
        <section>
        {this.props.activeRouteHandler()}
        </section>
      </div>
    )

  }

});

module.exports = App;