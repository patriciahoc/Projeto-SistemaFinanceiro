import { call, put } from "redux-saga/effects";
import { coinsFailure, coinsSuccess } from "./actions";
import coinsService from "../../../../services/Moedas/coins-services";
import { AxiosResponse } from "axios";

export function* getCoins(action: any) {
  try {
    const response: AxiosResponse = yield call(
      coinsService.listarCoins,
      action.payload
    );

    yield put(coinsSuccess(response));
  } catch (error) {
    yield put(coinsFailure());
  }
}
