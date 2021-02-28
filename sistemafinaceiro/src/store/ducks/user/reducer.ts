import { Reducer } from "redux";
import { UserAction } from "./types";

const INITIAL_STATE_USER: any = {
  accessToken: undefined,
  loading: false,
};

const usersReducer: Reducer = (state = INITIAL_STATE_USER, action: any) => {
  switch (action.type) {
    case UserAction.POST_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserAction.POST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.data.accessToken,
      };

    default:
      return state;
  }
};

export default usersReducer;
