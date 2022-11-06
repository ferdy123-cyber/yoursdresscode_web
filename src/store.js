import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./Reducer/UserReducer";

const root = combineReducers({ userReducer });

const store = createStore(root, applyMiddleware(thunk));

export default store;
