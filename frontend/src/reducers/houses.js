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
      return [...houses, action.payload.data];
    case DELETEHOUSE:
      const newHouses = houses.filter((house) => house.id !== action.payload);
      return newHouses;
    default:
      return houses;
  }
};

export default housesReducer;
