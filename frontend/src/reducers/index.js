import { combineReducers } from 'redux';
import authReducer from './auth';
import housesReducer from './houses';
import schoolsReducer from './schools';
import teachersReducer from './teachers';

const rootReducer = combineReducers({
  auth: authReducer,
  houses: housesReducer,
  schools: schoolsReducer,
  teachers: teachersReducer,
});

export default rootReducer;
