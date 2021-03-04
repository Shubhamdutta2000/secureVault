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

import axios from "axios";

// get user medical action
export const getMedical = (password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEDICAL_FETCH_REQUEST,
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
      "http://localhost:5000/user/medical",
      { password },
      config
    );
    console.log("ACTION:", data);

    dispatch({
      type: MEDICAL_FETCH_SUCCESS,
      payload: data,
    });
    console.log("fetch medical");
  } catch (error) {
    dispatch({
      type: MEDICAL_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// post user medical action
export const postMedical = (medical) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEDICAL_POST_REQUEST,
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
      "http://localhost:5000/user/medical/post",
      medical,
      config
    );

    dispatch({
      type: MEDICAL_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MEDICAL_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// update user medical action
export const updateMedical = (medical) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEDICAL_UPDATE_REQUEST,
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
      "http://localhost:5000/user/medical",
      medical,
      config
    );

    dispatch({
      type: MEDICAL_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MEDICAL_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete user medical action
export const deleteMedical = (medical) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEDICAL_DELETE_REQUEST,
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
      "http://localhost:5000/user/medical",
      medical,
      config
    );

    dispatch({
      type: MEDICAL_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MEDICAL_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
