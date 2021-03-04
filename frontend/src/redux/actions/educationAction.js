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

import axios from "axios";

// get user education action
export const getEducation = (password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EDUCATION_FETCH_REQUEST,
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
      "http://localhost:5000/user/education",
      { password },
      config
    );
    console.log("ACTION:", data);

    dispatch({
      type: EDUCATION_FETCH_SUCCESS,
      payload: data,
    });
    console.log("fetch education");
  } catch (error) {
    dispatch({
      type: EDUCATION_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// post user education action
export const postEducation = (education) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EDUCATION_POST_REQUEST,
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
      "http://localhost:5000/user/education/post",
      education,
      config
    );

    dispatch({
      type: EDUCATION_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDUCATION_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// update user education action
export const updateEducation = (education) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EDUCATION_UPDATE_REQUEST,
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
      "http://localhost:5000/user/education",
      education,
      config
    );

    dispatch({
      type: EDUCATION_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDUCATION_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete user education action
export const deleteEducation = (education) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EDUCATION_DELETE_REQUEST,
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
      "http://localhost:5000/user/education",
      education,
      config
    );

    dispatch({
      type: EDUCATION_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDUCATION_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
