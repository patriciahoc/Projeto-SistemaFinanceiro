import { combineReducers } from "redux";

import usersReducer from "./user/reducer";

const createRootReducer = () =>
  combineReducers({
    usersReducer,
  });

export default createRootReducer;
