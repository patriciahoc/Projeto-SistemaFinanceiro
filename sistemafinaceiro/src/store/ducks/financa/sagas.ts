import { call, put } from "redux-saga/effects";
import {
  getFinanceFailure,
  getFinanceSuccess,
  postFinanceFailure,
  postFinanceSuccess,
  deleteFinanceFailure,
  deleteFinanceRequest,
  deleteFinanceSuccess,
} from "../financa/actions";
import financeService from "../../../services/Financeiro/finance-services";
import { Finance } from "./types";

export function* saveFinance(action: any) {
  try {
    const response: Finance = yield call(
      financeService.saveFinance,
      action.payload
    );

    yield put(postFinanceSuccess(response));
  } catch (error) {
    yield put(postFinanceFailure());
  }
}

export function* getFinances(action: any) {
  try {
    const response: Finance[] = yield call(financeService.getFinance);
    console.log(response);
    yield put(getFinanceSuccess(response));
  } catch (error) {
    yield put(getFinanceFailure());
  }
}

export function* delFinances(action: any) {
  try {
    const response: Finance[] = yield call(financeService.delFinance, action);

    yield put(deleteFinanceSuccess(response));
  } catch (error) {
    yield put(deleteFinanceFailure());
  }
}
