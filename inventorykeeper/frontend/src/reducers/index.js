import { combineReducers } from "redux";
import inventory from "./inventory";
import auth from "./auth";

export default combineReducers({
  inventory,
  auth
});
