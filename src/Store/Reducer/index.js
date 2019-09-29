import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";

const reducers = combineReducers({
  userReducer,
  categoryReducer
});
export default reducers;
