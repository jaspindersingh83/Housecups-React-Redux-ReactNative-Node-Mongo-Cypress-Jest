import {
  GETSCHOOLINFO,
} from '../actions/index';

const schoolsReducer = (schools = [], action) => {
  switch (action.type) {
    case GETSCHOOLINFO:
      return {
        currentSchool: {
          ...action.payload.data,
        },
      };
    default:
      return schools;
  }
};

export default schoolsReducer;
