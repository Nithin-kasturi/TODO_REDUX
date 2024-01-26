import todoReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
const store=createStore(todoReducer,composeWithDevTools());
export default store;
