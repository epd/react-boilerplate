import { combineReducers } from 'redux';

function basicReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  basicReducer
});
