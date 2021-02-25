import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  userLoginReducer: userLoginReducer,
  userRegisterReducer: userRegisterReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
