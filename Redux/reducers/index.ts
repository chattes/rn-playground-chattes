import {combineReducers} from 'redux';
import {recipes} from '../reducers/recipe';

const rootReducer = combineReducers({
  recipes,
});

export default rootReducer;
