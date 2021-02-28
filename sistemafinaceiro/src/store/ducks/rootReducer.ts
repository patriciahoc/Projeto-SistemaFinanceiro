import { combineReducers } from "redux";

import usersReducer from "./user/reducer";
import coinsReducer from "./moedas/listaMoedas/reducer";
import detailsReducer from "./moedas/detailsMoedas/reducerDetails";
import financeReducer from "./financa/reducer";

const createRootReducer = () =>
  combineReducers({
    usersReducer,
    coinsReducer,
    detailsReducer,
    financeReducer,
  });

export default createRootReducer;
