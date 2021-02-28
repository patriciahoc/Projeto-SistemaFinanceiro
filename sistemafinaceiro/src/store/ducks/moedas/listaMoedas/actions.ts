import { action } from "typesafe-actions";
import { CoinsAction } from "./types";

export const coinsRequest = () => action(CoinsAction.GET_COINS_REQUEST);

export const coinsSuccess = (data: any) =>
  action(CoinsAction.GET_COINS_SUCCESS, data);

export const coinsFailure = () => action(CoinsAction.GET_COINS_FAILURE);
