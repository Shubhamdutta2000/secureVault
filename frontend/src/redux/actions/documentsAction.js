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

import axios from "axios";

// get user documents action
export const getDocuments = (password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCUMENTS_FETCH_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/user/documents",
      { password },
      config
    );
    console.log("ACTION:", data);

    dispatch({
      type: DOCUMENTS_FETCH_SUCCESS,
      payload: data,
    });
    console.log("fetch documents");
  } catch (error) {
    dispatch({
      type: DOCUMENTS_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// post user documents action
export const postDocuments = (documents) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCUMENTS_POST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/user/documents/post",
      documents,
      config
    );

    dispatch({
      type: DOCUMENTS_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCUMENTS_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// update user documents action
export const updateDocuments = (documents) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCUMENTS_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      "http://localhost:5000/user/documents",
      documents,
      config
    );

    dispatch({
      type: DOCUMENTS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCUMENTS_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete user documents action
export const deleteDocuments = (documents) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCUMENTS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      "http://localhost:5000/user/documents",
      documents,
      config
    );

    dispatch({
      type: DOCUMENTS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCUMENTS_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
