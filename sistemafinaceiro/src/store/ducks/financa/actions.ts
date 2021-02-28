import { action } from "typesafe-actions";
import { FinanceAction } from "./types";

export const postFinanceRequest = (valor: any) =>
  action(FinanceAction.POST_EXPENSE_REQUEST, valor);

export const postFinanceSuccess = (data: any) =>
  action(FinanceAction.POST_EXPENSE_SUCCESS, data);

export const postFinanceFailure = () =>
  action(FinanceAction.POST_EXPENSE_FAILURE);

export const getFinanceRequest = () =>
  action(FinanceAction.GET_EXPENSE_REQUEST);

export const getFinanceSuccess = (data: any) =>
  action(FinanceAction.GET_EXPENSE_SUCCESS, data);

export const getFinanceFailure = () =>
  action(FinanceAction.GET_EXPENSE_FAILURE);

export const deleteFinanceRequest = (data: any) =>
  action(FinanceAction.DEL_EXPENSE_REQUEST, data);

export const deleteFinanceSuccess = (data: any) =>
  action(FinanceAction.DEL_EXPENSE_SUCCESS, data);

export const deleteFinanceFailure = () =>
  action(FinanceAction.DEL_EXPENSE_FAILURE);
