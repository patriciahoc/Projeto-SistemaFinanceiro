import { call, put } from "redux-saga/effects";

import { postUserFailure, postUserSuccess } from "../user/actions";
import UsersService from "../../../services/User/user-services";
import { User } from "./types";

export function* postUsers(action: any) {
  try {
    const response: User = yield call(UsersService.postUsers, action.payload);

    yield put(postUserSuccess(response));
  } catch (error) {
    yield put(postUserFailure());
  }
}
