import { takeLatest, all } from "redux-saga/effects";
import { postUsers } from "./user/sagas";
import { UserAction } from "./user/types";

export default function* rootSaga(): any {
  return yield all([takeLatest(UserAction.POST_USER_REQUEST, postUsers)]);
}
