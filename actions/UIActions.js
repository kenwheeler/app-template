var McFly = require('../flux/McFly');

module.exports = UIActions = McFly.createActions({
  setNavState: function(state){
    return {
      actionType: 'SET_NAVSTATE',
      state: state
    }
  }
})