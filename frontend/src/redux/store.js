import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import {
  detailsReducer,
  postDetailsReducer,
  updateDetailsReducer,
  deleteDetailsReducer,
} from "./reducers/detailsReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userFetchDetails: detailsReducer,
  userPostDetails: postDetailsReducer,
  userUpdateDetails: updateDetailsReducer,
  userDeleteReducer: deleteDetailsReducer,
});

// GET user info from local Storage
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
