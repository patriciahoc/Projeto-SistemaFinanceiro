import { Reducer } from "redux";
import { FinanceAction, FinanceState } from "./types";

const INITIAL_STATE_FINANCE: FinanceState = {
  finances: [],
  loading: false,
  error: false,
};

const financeReducer: Reducer = (
  state = INITIAL_STATE_FINANCE,
  action: any
) => {
  switch (action.type) {
    case FinanceAction.POST_EXPENSE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FinanceAction.POST_EXPENSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        finances: [...state.finances, action.payload.data],
      };
    case FinanceAction.POST_EXPENSE_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case FinanceAction.GET_EXPENSE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FinanceAction.GET_EXPENSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        finances: action.payload.data,
      };
    case FinanceAction.GET_EXPENSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case FinanceAction.DEL_EXPENSE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FinanceAction.DEL_EXPENSE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: false,
      };
    case FinanceAction.DEL_EXPENSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default financeReducer;
