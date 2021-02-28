export enum UserAction {
  POST_USER_REQUEST = "@user/POST_USER_REQUEST",
  POST_USER_SUCCESS = "@user/POST_USER_SUCCESS",
  POST_USER_FAILURE = "@user/POST_USER_FAILURE",
  POST_LOGIN_FAILURE = "@user/POST_LOGIN_FAILURE",
  POST_LOGIN_SUCCESS = "@user/POST_LOGIN_SUCCESS",
  POST_LOGIN_REQUEST = "@user/POST_LOGIN_REQUEST",
}

export interface UserState {
  accessToken: string | undefined;
  id: number | undefined;
  loading: boolean;
  error: boolean;
}

export interface UserResponse {
  accessToken: string;
}
