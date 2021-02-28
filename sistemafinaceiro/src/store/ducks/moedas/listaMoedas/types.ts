export enum CoinsAction {
  GET_COINS_REQUEST = "@coins/GET_COINS_REQUEST",
  GET_COINS_SUCCESS = "@coins/GET_COINS_SUCCESS",
  GET_COINS_FAILURE = "@coins/GET_COINS_FAILURE",
  GET_DETAILS_SUCCESS = "@details/GET_DETAILS_SUCCESS",
  GET_DETAILS_FAILURE = "@details/GET_DETAILS_FAILURE",
}

export interface Coin {
  currency_code: string;
  name: string;
  symbol: string;
  country_code: string;
  country_name: string;
}

export interface CoinsState {
  coins: string[];
  loading: boolean;
  error: boolean;
}
