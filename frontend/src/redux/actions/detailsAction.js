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

import axios from "axios";

// get user details action
export const getDetails = (password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DETAILS_FETCH_REQUEST,
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
      "http://localhost:5000/user/details",
      { password },
      config
    );
    console.log("ACTION:", data);

    dispatch({
      type: DETAILS_FETCH_SUCCESS,
      payload: data,
    });
    console.log("fetch details");
  } catch (error) {
    dispatch({
      type: DETAILS_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// post user details action
export const postDetails = (details) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DETAILS_POST_REQUEST,
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
      "http://localhost:5000/user/details/post",
      details,
      config
    );

    dispatch({
      type: DETAILS_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DETAILS_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// put user details action
export const putDetails = (details) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DETAILS_UPDATE_REQUEST,
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
      "http://localhost:5000/user/details",
      details,
      config
    );

    dispatch({
      type: DETAILS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DETAILS_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete user details action
export const deleteDetails = (details) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DETAILS_DELETE_REQUEST,
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
      "http://localhost:5000/user/details",
      details,
      config
    );

    dispatch({
      type: DETAILS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DETAILS_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
