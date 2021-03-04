import {
  EDUCATION_FETCH_REQUEST,
  EDUCATION_FETCH_SUCCESS,
  EDUCATION_FETCH_FAILED,
  EDUCATION_POST_REQUEST,
  EDUCATION_POST_SUCCESS,
  EDUCATION_POST_FAILED,
  EDUCATION_UPDATE_REQUEST,
  EDUCATION_UPDATE_SUCCESS,
  EDUCATION_UPDATE_FAILED,
  EDUCATION_DELETE_REQUEST,
  EDUCATION_DELETE_SUCCESS,
  EDUCATION_DELETE_FAILED,
} from "../actionTypes/educationConstants";

// fetch education reducer
export const educationReducer = (
  state = { loading: false, education: null, error: null },
  action
) => {
  switch (action.type) {
    case EDUCATION_FETCH_REQUEST:
      return {
        loading: true,
      };

    case EDUCATION_FETCH_SUCCESS:
      return {
        loading: false,
        education: action.payload,
        error: null,
      };

    case EDUCATION_FETCH_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// post education reducer
export const postEducationReducer = (
  state = { loading: false, education: null, error: null },
  action
) => {
  switch (action.type) {
    case EDUCATION_POST_REQUEST:
      return {
        loading: true,
      };

    case EDUCATION_POST_SUCCESS:
      return {
        loading: false,
        education: action.payload,
        error: null,
      };

    case EDUCATION_POST_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// update education reducer
export const updateEducationReducer = (
  state = { loading: false, education: null, error: null },
  action
) => {
  switch (action.type) {
    case EDUCATION_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case EDUCATION_UPDATE_SUCCESS:
      return {
        loading: false,
        education: action.payload,
        error: null,
      };

    case EDUCATION_UPDATE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// delete education reducer
export const deleteEducationReducer = (
  state = { loading: false, education: null, error: null },
  action
) => {
  switch (action.type) {
    case EDUCATION_DELETE_REQUEST:
      return {
        loading: true,
      };

    case EDUCATION_DELETE_SUCCESS:
      return {
        loading: false,
        education: action.payload,
        error: null,
      };

    case EDUCATION_DELETE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
