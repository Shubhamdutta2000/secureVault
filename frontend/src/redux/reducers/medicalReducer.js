import {
  MEDICAL_FETCH_REQUEST,
  MEDICAL_FETCH_SUCCESS,
  MEDICAL_FETCH_FAILED,
  MEDICAL_POST_REQUEST,
  MEDICAL_POST_SUCCESS,
  MEDICAL_POST_FAILED,
  MEDICAL_UPDATE_REQUEST,
  MEDICAL_UPDATE_SUCCESS,
  MEDICAL_UPDATE_FAILED,
  MEDICAL_DELETE_REQUEST,
  MEDICAL_DELETE_SUCCESS,
  MEDICAL_DELETE_FAILED,
} from "../actionTypes/medicalConstants";

// fetch medical reducer
export const medicalReducer = (
  state = { loading: false, medical: null, error: null },
  action
) => {
  switch (action.type) {
    case MEDICAL_FETCH_REQUEST:
      return {
        loading: true,
      };

    case MEDICAL_FETCH_SUCCESS:
      return {
        loading: false,
        medical: action.payload,
        error: null,
      };

    case MEDICAL_FETCH_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// post medical reducer
export const postMedicalReducer = (
  state = { loading: false, medical: null, error: null },
  action
) => {
  switch (action.type) {
    case MEDICAL_POST_REQUEST:
      return {
        loading: true,
      };

    case MEDICAL_POST_SUCCESS:
      return {
        loading: false,
        medical: action.payload,
        error: null,
      };

    case MEDICAL_POST_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// update medical reducer
export const updateMedicalReducer = (
  state = { loading: false, medical: null, error: null },
  action
) => {
  switch (action.type) {
    case MEDICAL_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case MEDICAL_UPDATE_SUCCESS:
      return {
        loading: false,
        medical: action.payload,
        error: null,
      };

    case MEDICAL_UPDATE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// delete medical reducer
export const deleteMedicalReducer = (
  state = { loading: false, medical: null, error: null },
  action
) => {
  switch (action.type) {
    case MEDICAL_DELETE_REQUEST:
      return {
        loading: true,
      };

    case MEDICAL_DELETE_SUCCESS:
      return {
        loading: false,
        medical: action.payload,
        error: null,
      };

    case MEDICAL_DELETE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
