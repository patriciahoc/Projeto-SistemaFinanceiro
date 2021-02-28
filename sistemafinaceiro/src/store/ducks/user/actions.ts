import { action } from "typesafe-actions";
import { UserAction } from "./types";

export const postUserRequest = (user: any) =>
  action(UserAction.POST_USER_REQUEST, user);

export const postUserSuccess = (data: any) =>
  action(UserAction.POST_USER_SUCCESS, data);

export const postUserFailure = () => action(UserAction.POST_USER_FAILURE);
