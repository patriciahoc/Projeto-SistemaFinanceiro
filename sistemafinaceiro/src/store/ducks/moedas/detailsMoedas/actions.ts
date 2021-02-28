import { action } from "typesafe-actions";
import { CoinDetailsAction } from "./types";

export const detailsRequest = (coinName: string) =>
  action(CoinDetailsAction.GET_DETAILS_REQUEST, coinName);

export const detailsSuccess = (data: any) =>
  action(CoinDetailsAction.GET_DETAILS_SUCCESS, data);

export const detailsFailure = () =>
  action(CoinDetailsAction.GET_DETAILS_FAILURE);
