import {
  FINANCE_FETCH_REQUEST,
  FINANCE_FETCH_SUCCESS,
  FINANCE_FETCH_FAILED,
  FINANCE_POST_REQUEST,
  FINANCE_POST_SUCCESS,
  FINANCE_POST_FAILED,
  FINANCE_UPDATE_REQUEST,
  FINANCE_UPDATE_SUCCESS,
  FINANCE_UPDATE_FAILED,
  FINANCE_DELETE_REQUEST,
  FINANCE_DELETE_SUCCESS,
  FINANCE_DELETE_FAILED,
} from "../actionTypes/financeConstants";

// fetch finance reducer
export const financeReducer = (
  state = { loading: false, finance: null, error: null },
  action
) => {
  switch (action.type) {
    case FINANCE_FETCH_REQUEST:
      return {
        loading: true,
      };

    case FINANCE_FETCH_SUCCESS:
      return {
        loading: false,
        finance: action.payload,
        error: null,
      };

    case FINANCE_FETCH_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// post finance reducer
export const postFinanceReducer = (
  state = { loading: false, finance: null, error: null },
  action
) => {
  switch (action.type) {
    case FINANCE_POST_REQUEST:
      return {
        loading: true,
      };

    case FINANCE_POST_SUCCESS:
      return {
        loading: false,
        finance: action.payload,
        error: null,
      };

    case FINANCE_POST_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// update finance reducer
export const updateFinanceReducer = (
  state = { loading: false, finance: null, error: null },
  action
) => {
  switch (action.type) {
    case FINANCE_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case FINANCE_UPDATE_SUCCESS:
      return {
        loading: false,
        finance: action.payload,
        error: null,
      };

    case FINANCE_UPDATE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// delete finance reducer
export const deleteFinanceReducer = (
  state = { loading: false, finance: null, error: null },
  action
) => {
  switch (action.type) {
    case FINANCE_DELETE_REQUEST:
      return {
        loading: true,
      };

    case FINANCE_DELETE_SUCCESS:
      return {
        loading: false,
        finance: action.payload,
        error: null,
      };

    case FINANCE_DELETE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
