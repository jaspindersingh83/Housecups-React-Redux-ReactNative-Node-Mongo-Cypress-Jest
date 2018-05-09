import {
  ADDTEACHER,
  GETTEACHERS,
  DELETETEACHER,
} from '../actions/index';

const teachersReducer = (teachers = [], action) => {
  switch (action.type) {
    // When user is created send signedUpusername in props so that username field
    // can be auto populate at first instance of signin
    case ADDTEACHER:
      return [...teachers, action.payload.data];
    case GETTEACHERS:
      return [...action.payload.data];
    case DELETETEACHER:
      return teachers.filter(teacher => teacher._id !== action.payload.data.teacher._id);
    default:
      return teachers;
  }
};

export default teachersReducer;
