import coinsApi from "./api";

const CoinsService = {
  listarCoins: (coins: any) => coinsApi.get("/currencies.json", coins),
  detailsCoin: (coin: any) => coinsApi.get(`currency/${coin}.json?lang=pt`),
};

export default CoinsService;
