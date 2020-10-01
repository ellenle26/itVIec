import { combineReducers } from "redux";
import authReducer from "./authReducer";
import reducer from "./reducer";

export default combineReducers({
  job: reducer,
  auth: authReducer,
});
