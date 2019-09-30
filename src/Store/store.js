import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export default store;
