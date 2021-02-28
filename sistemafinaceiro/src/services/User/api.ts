import axios from "axios";

const userApiUrl = "http://localhost:4000";

const apiUser = axios.create({
  baseURL: userApiUrl,
});

export default apiUser;
