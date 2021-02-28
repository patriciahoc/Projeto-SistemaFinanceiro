import { Reducer } from "redux";
import { UserAction, UserState } from "./types";

const INITIAL_STATE_USER: UserState = {
  accessToken: undefined,
  loading: false,
  error: false,
  id: undefined,
};

const usersReducer: Reducer = (state = INITIAL_STATE_USER, action: any) => {
  switch (action.type) {
    case UserAction.POST_LOGIN_REQUEST:
    case UserAction.POST_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UserAction.POST_LOGIN_SUCCESS:
    case UserAction.POST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        accessToken: action.payload.data.accessToken,
      };
    case UserAction.POST_LOGIN_FAILURE:
    case UserAction.POST_USER_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
