import { Reducer } from "redux";
import { CoinsAction, CoinsState } from "./types";

const INITIAL_STATE_USER: CoinsState = {
  coins: [],
  loading: false,
  error: false,
};

const coinsReducer: Reducer = (state = INITIAL_STATE_USER, action: any) => {
  switch (action.type) {
    case CoinsAction.GET_COINS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case CoinsAction.GET_COINS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        coins: Object.keys(action.payload.data),
      };
    case CoinsAction.GET_COINS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default coinsReducer;
