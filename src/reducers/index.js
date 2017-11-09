import { combineReducers } from 'redux';

import WeathersReducer from './reducer_weathers';

const rootReducer = combineReducers({
  weathers: WeathersReducer
});

export default rootReducer;
