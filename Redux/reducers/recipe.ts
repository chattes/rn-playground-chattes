import {init} from '../initialState';
import {REQUEST_RECIPES, RECEIVE_RECIPES} from '../actions/recipeActions';
import {produce} from 'immer';

export const recipes = (state = init.recipes, action) => {
  switch (action.type) {
    case REQUEST_RECIPES: {
      const new_state = produce(state, (dstate) => {
        dstate.loading = true;
      });
      return new_state;
    }

    case RECEIVE_RECIPES: {
      const new_state = produce(state, (dstate) => {
        dstate.loading = false;
        dstate.collection = action.data;
      });
      return new_state;
    }
    default:
      return state;
  }
};
