import { takeLatest, all } from "redux-saga/effects";
import { CoinsAction } from "./moedas/listaMoedas/types";
import { register, login } from "./user/sagas";
import { getCoins } from "./moedas/listaMoedas/sagas";
import { UserAction } from "./user/types";
import { CoinDetailsAction } from "./moedas/detailsMoedas/types";
import { datailsCoin } from "./moedas/detailsMoedas/sagasDetails";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(UserAction.POST_USER_REQUEST, register),
    takeLatest(UserAction.POST_LOGIN_REQUEST, login),
    takeLatest(CoinsAction.GET_COINS_REQUEST, getCoins),
    takeLatest(CoinDetailsAction.GET_DETAILS_REQUEST, datailsCoin),
  ]);
}
