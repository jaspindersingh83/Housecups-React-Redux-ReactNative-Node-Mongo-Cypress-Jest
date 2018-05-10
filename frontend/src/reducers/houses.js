import {
  ADDHOUSE,
  UPDATEHOUSE,
  GETHOUSES,
  DELETEHOUSE,
  UPDATESCORE,
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
<<<<<<< HEAD
      return houses.filter(house => house !== action.payload.data.removedHouse._id);
=======
      return houses.filter(house => house._id !== action.payload.data.house._id);
    // Reduce Houses after changes in scores
    case UPDATESCORE:
      return houses.map((house) => {
        if (house._id === action.payload.data.house._id) {
          return Object.assign({}, house, action.payload.data.house);
        }
        return house;
      });
>>>>>>> master
    default:
      return houses;
  }
};

export default housesReducer;
