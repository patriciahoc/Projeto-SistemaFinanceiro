import axios from "axios";

const financeApiUrl = "http://localhost:4000/finance";

const apiFinance = axios.create({
  baseURL: financeApiUrl,
});

export default apiFinance;
