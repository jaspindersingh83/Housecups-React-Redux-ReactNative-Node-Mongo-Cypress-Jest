import { combineReducers } from 'redux';
import authReducer from './auth';
import housesReducer from './houses';

const rootReducer = combineReducers({
  auth: authReducer,
  houses: housesReducer,
});

export default rootReducer;
