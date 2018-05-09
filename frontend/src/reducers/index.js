import { combineReducers } from 'redux';
import authReducer from './auth';
import housesReducer from './houses';
import schoolsReducer from './schools';

const rootReducer = combineReducers({
  auth: authReducer,
  houses: housesReducer,
  schools: schoolsReducer,
});

export default rootReducer;
