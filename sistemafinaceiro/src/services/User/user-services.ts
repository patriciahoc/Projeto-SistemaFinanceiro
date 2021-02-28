import userApi from "./api";

const UsersService = {
  postUsers: (user: any) => userApi.post("/register", user),
};

export default UsersService;
