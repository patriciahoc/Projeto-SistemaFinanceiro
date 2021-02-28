import { combineReducers } from "redux";

import usersReducer from "./user/reducer";
import coinsReducer from "./moedas/listaMoedas/reducer";
import detailsReducer from "./moedas/detailsMoedas/reducerDetails";

const createRootReducer = () =>
  combineReducers({
    usersReducer,
    coinsReducer,
    detailsReducer,
  });

export default createRootReducer;
