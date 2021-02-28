import { takeLatest, all } from "redux-saga/effects";

import { CoinsAction } from "./moedas/listaMoedas/types";
import { getCoins } from "./moedas/listaMoedas/sagas";

import { register, login } from "./user/sagas";
import { UserAction } from "./user/types";

import { CoinDetailsAction } from "./moedas/detailsMoedas/types";
import { datailsCoin } from "./moedas/detailsMoedas/sagasDetails";

import { FinanceAction } from "./financa/types";
import { getFinances, saveFinance, delFinances } from "./financa/sagas";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(UserAction.POST_USER_REQUEST, register),
    takeLatest(UserAction.POST_LOGIN_REQUEST, login),
    takeLatest(CoinsAction.GET_COINS_REQUEST, getCoins),
    takeLatest(CoinDetailsAction.GET_DETAILS_REQUEST, datailsCoin),
    takeLatest(FinanceAction.POST_EXPENSE_REQUEST, saveFinance),
    takeLatest(FinanceAction.GET_EXPENSE_REQUEST, getFinances),
    takeLatest(FinanceAction.DEL_EXPENSE_REQUEST, delFinances),
  ]);
}
