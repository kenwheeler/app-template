var McFly = require('../flux/McFly');

var _navigationActive = false;

function setNavState(state) {
  _navigationActive = state;
}

module.exports = UIStore = McFly.createStore({
  getNavState: function(){
    return _navigationActive;
  }
},function(payload){
  if(payload.actionType === "SET_NAVSTATE") {
      setNavState(payload.state);
      UIStore.emitChange();
  }
});