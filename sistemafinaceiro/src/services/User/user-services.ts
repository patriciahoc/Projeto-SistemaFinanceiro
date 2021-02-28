import userApi from "./api";

const UsersService = {
  register: (user: any) => userApi.post("/register", user),
  login: (user: any) => userApi.post("/login", user),
};

export default UsersService;
