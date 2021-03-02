import {
  DETAILS_FETCH_REQUEST,
  DETAILS_FETCH_SUCCESS,
  DETAILS_FETCH_FAILED,
  DETAILS_POST_REQUEST,
  DETAILS_POST_SUCCESS,
  DETAILS_POST_FAILED,
  DETAILS_UPDATE_REQUEST,
  DETAILS_UPDATE_SUCCESS,
  DETAILS_UPDATE_FAILED,
  DETAILS_DELETE_REQUEST,
  DETAILS_DELETE_SUCCESS,
  DETAILS_DELETE_FAILED,
} from "../actionTypes/detailsConstants";

// fetch details reducer
export const detailsReducer = (
  state = { loading: false, details: null, error: null },
  action
) => {
  switch (action.type) {
    case DETAILS_FETCH_REQUEST:
      return {
        loading: true,
      };

    case DETAILS_FETCH_SUCCESS:
      return {
        loading: false,
        details: action.payload,
        error: null,
      };

    case DETAILS_FETCH_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// post details reducer
export const postDetailsReducer = (
  state = { loading: false, details: null, error: null },
  action
) => {
  switch (action.type) {
    case DETAILS_POST_REQUEST:
      return {
        loading: true,
      };

    case DETAILS_POST_SUCCESS:
      return {
        loading: false,
        details: action.payload,
        error: null,
      };

    case DETAILS_POST_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// update details reducer
export const updateDetailsReducer = (
  state = { loading: false, details: null, error: null },
  action
) => {
  switch (action.type) {
    case DETAILS_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case DETAILS_UPDATE_SUCCESS:
      return {
        loading: false,
        details: action.payload,
        error: null,
      };

    case DETAILS_UPDATE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// delete details reducer
export const deleteDetailsReducer = (
  state = { loading: false, details: null, error: null },
  action
) => {
  switch (action.type) {
    case DETAILS_DELETE_REQUEST:
      return {
        loading: true,
      };

    case DETAILS_DELETE_SUCCESS:
      return {
        loading: false,
        details: action.payload,
        error: null,
      };

    case DETAILS_DELETE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
