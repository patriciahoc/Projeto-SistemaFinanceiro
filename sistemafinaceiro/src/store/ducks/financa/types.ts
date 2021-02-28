export enum FinanceAction {
  POST_EXPENSE_REQUEST = "@expense/POST_EXPENSE_REQUEST",
  POST_EXPENSE_SUCCESS = "@expense/POST_EXPENSE_SUCCESS",
  POST_EXPENSE_FAILURE = "@expense/POST_EXPENSE_FAILURE",
  GET_EXPENSE_REQUEST = "@expense/GET_EXPENSE_REQUEST",
  GET_EXPENSE_SUCCESS = "@expense/GET_EXPENSE_SUCCESS",
  GET_EXPENSE_FAILURE = "@expense/GET_EXPENSE_FAILURE",
  DEL_EXPENSE_REQUEST = "@expense/DEL_EXPENSE_REQUEST",
  DEL_EXPENSE_SUCCESS = "@expense/DEL_EXPENSE_SUCCESS",
  DEL_EXPENSE_FAILURE = "@expense/DEL_EXPENSE_FAILURE",
}

export interface FinanceState {
  finances: Finance[];
  loading: boolean;
  error: boolean;
}

export interface Finance {
  type: string;
  amount: string;
  id: number;
}
