import { call, put } from "redux-saga/effects";
import { detailsFailure, detailsSuccess } from "./actions";
import coinsService from "../../../../services/Moedas/coins-services";
import { AxiosResponse } from "axios";

export function* datailsCoin(action: any) {
  try {
    const response: AxiosResponse = yield call(
      coinsService.detailsCoin,
      action.payload
    );

    yield put(detailsSuccess(response));
  } catch (error) {
    yield put(detailsFailure());
  }
}
