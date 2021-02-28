import axios from "axios";

const coinsApiUrl =
  "https://cors-anywhere.herokuapp.com/https://v2.api.forex/infos";

const apiCoins = axios.create({
  baseURL: coinsApiUrl,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost",
    crossorigin: true,
  },
});

export default apiCoins;
