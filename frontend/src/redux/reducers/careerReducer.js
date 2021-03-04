import {
  CAREER_FETCH_REQUEST,
  CAREER_FETCH_SUCCESS,
  CAREER_FETCH_FAILED,
  CAREER_POST_REQUEST,
  CAREER_POST_SUCCESS,
  CAREER_POST_FAILED,
  CAREER_UPDATE_REQUEST,
  CAREER_UPDATE_SUCCESS,
  CAREER_UPDATE_FAILED,
  CAREER_DELETE_REQUEST,
  CAREER_DELETE_SUCCESS,
  CAREER_DELETE_FAILED,
} from "../actionTypes/careerConstants";

// fetch career reducer
export const careerReducer = (
  state = { loading: false, career: null, error: null },
  action
) => {
  switch (action.type) {
    case CAREER_FETCH_REQUEST:
      return {
        loading: true,
      };

    case CAREER_FETCH_SUCCESS:
      return {
        loading: false,
        career: action.payload,
        error: null,
      };

    case CAREER_FETCH_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// post career reducer
export const postCareerReducer = (
  state = { loading: false, career: null, error: null },
  action
) => {
  switch (action.type) {
    case CAREER_POST_REQUEST:
      return {
        loading: true,
      };

    case CAREER_POST_SUCCESS:
      return {
        loading: false,
        career: action.payload,
        error: null,
      };

    case CAREER_POST_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// update career reducer
export const updateCareerReducer = (
  state = { loading: false, career: null, error: null },
  action
) => {
  switch (action.type) {
    case CAREER_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case CAREER_UPDATE_SUCCESS:
      return {
        loading: false,
        career: action.payload,
        error: null,
      };

    case CAREER_UPDATE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// delete career reducer
export const deleteCareerReducer = (
  state = { loading: false, career: null, error: null },
  action
) => {
  switch (action.type) {
    case CAREER_DELETE_REQUEST:
      return {
        loading: true,
      };

    case CAREER_DELETE_SUCCESS:
      return {
        loading: false,
        career: action.payload,
        error: null,
      };

    case CAREER_DELETE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
