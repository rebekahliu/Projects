import { RECEIVE_POKE } from '../actions/pokemon_actions';

const itemsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POKE:
      return action.poke.items;
    default:
      return state;
  }
};

export default itemsReducer;
