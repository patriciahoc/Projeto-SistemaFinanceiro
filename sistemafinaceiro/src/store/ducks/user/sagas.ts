import { call, put } from "redux-saga/effects";
import {
  postUserFailure,
  postUserSuccess,
  postLoginFailure,
  postLoginSuccess,
} from "../user/actions";
import UsersService from "../../../services/User/user-services";
import { UserResponse } from "./types";

export function* register(action: any) {
  try {
    const response: UserResponse = yield call(
      UsersService.register,
      action.payload
    );

    yield put(postUserSuccess(response));
  } catch (error) {
    yield put(postUserFailure());
  }
}

export function* login(action: any) {
  try {
    const response: UserResponse = yield call(
      UsersService.login,
      action.payload
    );

    yield put(postLoginSuccess(response));
  } catch (error) {
    yield put(postLoginFailure());
  }
}
