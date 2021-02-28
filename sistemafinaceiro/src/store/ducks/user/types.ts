export enum UserAction {
  POST_USER_REQUEST = "@user/POST_USER_REQUEST",
  POST_USER_SUCCESS = "@user/POST_USER_SUCCESS",
  POST_USER_FAILURE = "@user/POST_USER_FAILURE",
}

export interface User {
  email: string;
  password: number;
}
