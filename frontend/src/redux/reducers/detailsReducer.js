import {
  REQUEST_DETAILS,
  FETCH_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
  DELETE_DETAILS,
  DETAILS_FAILED,
} from "../actionTypes/detailsConstants";

// details reducer
export const detailsReducer = (
  state = { loading: false, details: null, error: null },
  action
) => {
  switch (action.type) {
    case REQUEST_DETAILS:
      return {
        loading: true,
      };

    case FETCH_DETAILS:
      return {
        loading: false,
        details: action.payload,
        error: null,
      };

    case POST_DETAILS:
      return {
        loading: false,
        details: action.payload,
        error: null,
      };

    case UPDATE_DETAILS:
      return {
        loading: false,
        details: action.payload,
        error: null,
      };

    case DELETE_DETAILS:
      return {
        loading: false,
        details: action.payload,
        error: null,
      };

    case DETAILS_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
