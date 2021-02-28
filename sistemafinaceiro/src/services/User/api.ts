import axios from "axios";

const userApiUrl = "http://localhost:4000/register/";

const apiUser = axios.create({
  baseURL: userApiUrl,
});

export default apiUser;
