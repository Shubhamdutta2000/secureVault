import {
  FINANCE_FETCH_REQUEST,
  FINANCE_FETCH_SUCCESS,
  FINANCE_FETCH_FAILED,
  FINANCE_POST_REQUEST,
  FINANCE_POST_SUCCESS,
  FINANCE_POST_FAILED,
  FINANCE_UPDATE_REQUEST,
  FINANCE_UPDATE_SUCCESS,
  FINANCE_UPDATE_FAILED,
  FINANCE_DELETE_REQUEST,
  FINANCE_DELETE_SUCCESS,
  FINANCE_DELETE_FAILED,
} from "../actionTypes/financeConstants";

import axios from "axios";

// get user finance action
export const getFinance = (password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FINANCE_FETCH_REQUEST,
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
      "http://localhost:5000/user/finance",
      { password },
      config
    );
    console.log("ACTION:", data);

    dispatch({
      type: FINANCE_FETCH_SUCCESS,
      payload: data,
    });
    console.log("fetch finance");
  } catch (error) {
    dispatch({
      type: FINANCE_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// post user finance action
export const postFinance = (finance) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FINANCE_POST_REQUEST,
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
      "http://localhost:5000/user/finance/post",
      finance,
      config
    );

    dispatch({
      type: FINANCE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FINANCE_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// update user finance action
export const updateFinance = (finance) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FINANCE_UPDATE_REQUEST,
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
      "http://localhost:5000/user/finance",
      finance,
      config
    );

    dispatch({
      type: FINANCE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FINANCE_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete user finance action
export const deleteFinance = (finance) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FINANCE_DELETE_REQUEST,
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
      "http://localhost:5000/user/finance",
      finance,
      config
    );

    dispatch({
      type: FINANCE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FINANCE_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
