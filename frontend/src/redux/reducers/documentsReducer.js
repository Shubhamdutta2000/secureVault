import {
  DOCUMENTS_FETCH_REQUEST,
  DOCUMENTS_FETCH_SUCCESS,
  DOCUMENTS_FETCH_FAILED,
  DOCUMENTS_POST_REQUEST,
  DOCUMENTS_POST_SUCCESS,
  DOCUMENTS_POST_FAILED,
  DOCUMENTS_UPDATE_REQUEST,
  DOCUMENTS_UPDATE_SUCCESS,
  DOCUMENTS_UPDATE_FAILED,
  DOCUMENTS_DELETE_REQUEST,
  DOCUMENTS_DELETE_SUCCESS,
  DOCUMENTS_DELETE_FAILED,
} from "../actionTypes/documentsConstants";

// fetch documents reducer
export const documentsReducer = (
  state = { loading: false, documents: null, error: null },
  action
) => {
  switch (action.type) {
    case DOCUMENTS_FETCH_REQUEST:
      return {
        loading: true,
      };

    case DOCUMENTS_FETCH_SUCCESS:
      return {
        loading: false,
        documents: action.payload,
        error: null,
      };

    case DOCUMENTS_FETCH_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// post documents reducer
export const postDocumentsReducer = (
  state = { loading: false, documents: null, error: null },
  action
) => {
  switch (action.type) {
    case DOCUMENTS_POST_REQUEST:
      return {
        loading: true,
      };

    case DOCUMENTS_POST_SUCCESS:
      return {
        loading: false,
        documents: action.payload,
        error: null,
      };

    case DOCUMENTS_POST_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// update documents reducer
export const updateDocumentsReducer = (
  state = { loading: false, documents: null, error: null },
  action
) => {
  switch (action.type) {
    case DOCUMENTS_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case DOCUMENTS_UPDATE_SUCCESS:
      return {
        loading: false,
        documents: action.payload,
        error: null,
      };

    case DOCUMENTS_UPDATE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// delete documents reducer
export const deleteDocumentsReducer = (
  state = { loading: false, documents: null, error: null },
  action
) => {
  switch (action.type) {
    case DOCUMENTS_DELETE_REQUEST:
      return {
        loading: true,
      };

    case DOCUMENTS_DELETE_SUCCESS:
      return {
        loading: false,
        documents: action.payload,
        error: null,
      };

    case DOCUMENTS_DELETE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
