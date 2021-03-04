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

import axios from "axios";

// get user career action
export const getCareer = (password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAREER_FETCH_REQUEST,
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
      "http://localhost:5000/user/career",
      { password },
      config
    );
    console.log("ACTION:", data);

    dispatch({
      type: CAREER_FETCH_SUCCESS,
      payload: data,
    });
    console.log("fetch career");
  } catch (error) {
    dispatch({
      type: CAREER_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// post user career action
export const postCareer = (career) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAREER_POST_REQUEST,
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
      "http://localhost:5000/user/career/post",
      career,
      config
    );

    dispatch({
      type: CAREER_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CAREER_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// update user career action
export const updateCareer = (career) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAREER_UPDATE_REQUEST,
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
      "http://localhost:5000/user/career",
      career,
      config
    );

    dispatch({
      type: CAREER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CAREER_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete user career action
export const deleteCareer = (career) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAREER_DELETE_REQUEST,
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
      "http://localhost:5000/user/career",
      career,
      config
    );

    dispatch({
      type: CAREER_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CAREER_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
