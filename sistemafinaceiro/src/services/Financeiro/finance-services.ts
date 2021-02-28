import apiFinance from "./api";

const FinanceService = {
  saveFinance: (data: any) => {
    const token = localStorage.getItem("token");
    return apiFinance.post("/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  getFinance: () => {
    const token = localStorage.getItem("token");
    return apiFinance.get("/", {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  delFinance: (data: any) => {
    const token = localStorage.getItem("token");
    return apiFinance.delete(`/${data.payload.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default FinanceService;
