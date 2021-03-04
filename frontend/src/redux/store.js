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
import {
  documentsReducer,
  postDocumentsReducer,
  updateDocumentsReducer,
  deleteDocumentsReducer,
} from "./reducers/documentsReducer";
import {
  careerReducer,
  postCareerReducer,
  updateCareerReducer,
  deleteCareerReducer,
} from "./reducers/careerReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  // details
  userFetchDetails: detailsReducer,
  userPostDetails: postDetailsReducer,
  userUpdateDetails: updateDetailsReducer,
  userDeleteDocuments: deleteDetailsReducer,
  //documents
  userFetchDocuments: documentsReducer,
  userPostDocuments: postDocumentsReducer,
  userUpdateDocuments: updateDocumentsReducer,
  userDeleteDocuments: deleteDocumentsReducer,
  //career
  userFetchCareer: careerReducer,
  userPostCareer: postCareerReducer,
  userUpdateCareer: updateCareerReducer,
  userDeleteCareer: deleteCareerReducer,
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
