import {
  REQUEST_DETAILS,
  FETCH_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
  DELETE_DETAILS,
  DETAILS_FAILED,
} from "../actionTypes/detailsConstants";

import axios from "axios";

// get user details action
export const getDetails = (password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_DETAILS,
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

    dispatch({
      type: FETCH_DETAILS,
      payload: data,
    });

    // store user details in localStorage
    localStorage.setItem("userDetails", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: DETAILS_FAILED,
      payload: error,
    });
  }
};

// post user details action
export const postDetails = (details) => async (dispatch) => {
  try {
    dispatch({
      type: REQUEST_DETAILS,
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.post(
      "http://localhost:5000/user/details/post",
      details,
      config
    );

    dispatch({
      type: POST_DETAILS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DETAILS_FAILED,
      payload: error,
    });
  }
};
