export enum CoinDetailsAction {
  GET_DETAILS_REQUEST = "@details/GET_COINS_REQUEST",
  GET_DETAILS_SUCCESS = "@details/GET_DETAILS_SUCCESS",
  GET_DETAILS_FAILURE = "@details/GET_DETAILS_FAILURE",
}

export interface CoinDetailsState {
  details: string | undefined;
  loading: boolean;
  error: boolean;
}

export interface CoinDetails {
  currency_code: string;
  name: string;
  symbol: string;
  country_code: string;
  central_bank: string;
  country_name: string;
  using_countries: string[];
}
