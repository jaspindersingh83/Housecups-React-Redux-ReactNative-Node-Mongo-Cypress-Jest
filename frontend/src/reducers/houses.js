import {
  ADDHOUSE,
  UPDATEHOUSE,
  GETHOUSES,
  DELETEHOUSE,
} from '../actions/index';

const housesReducer = (houses = [], action) => {
  switch (action.type) {
    // When user is created send signedUpusername in props so that username field
    // can be auto populate at first instance of signin
    case ADDHOUSE:
      return [...houses, action.payload.data];
    case UPDATEHOUSE:
      return [...houses, action.payload.data];
    case GETHOUSES:
      return [...action.payload.data];
    case DELETEHOUSE:
      return houses.filter(house => house._id !== action.payload.data.house._id);
    default:
      return houses;
  }
};

export default housesReducer;
