import { Reducer } from "redux";
import { CoinDetailsAction, CoinDetailsState } from "./types";

const INITIAL_STATE_COIN_DETAILS: CoinDetailsState = {
  details: undefined,
  loading: false,
  error: false,
};

const detailsReducer: Reducer = (
  state = INITIAL_STATE_COIN_DETAILS,
  action: any
) => {
  switch (action.type) {
    case CoinDetailsAction.GET_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        details: undefined,
      };
    case CoinDetailsAction.GET_DETAILS_SUCCESS:
      console.log(Object.values(action.payload.data));
      return {
        ...state,
        loading: false,
        error: false,
        details: Object.values(action.payload.data)[0],
      };
    case CoinDetailsAction.GET_DETAILS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        details: undefined,
      };

    default:
      return state;
  }
};

export default detailsReducer;
