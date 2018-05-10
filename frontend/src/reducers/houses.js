import {
  ADDHOUSE,
  UPDATEHOUSE,
  GETHOUSES,
  DELETEHOUSE,
  // UPDATESCORE,
  // GETSCHOOLINFO,
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
      console.log(action.payload.data);
      return [...action.payload.data];
    case DELETEHOUSE:
      return houses.filter(house => house._id !== action.payload.data.house._id);
    // Reduce Houses after changes in scores
    // case UPDATESCORE:
    //   return houses.map((house) => {
    //     if (house._id === action.payload.data.house._id) {
    //       return Object.assign({}, house, action.payload.data.house);
    //     }
    //     return house;
    //   });
    // Get all the houses by School Name For PublicScoreBoard,
    // action.payload.data returns a School
    // case GETSCHOOLINFO:
    //   return [...action.payload.data.houses];
    default:
      return houses;
  }
};

export default housesReducer;
