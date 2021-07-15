import reducers from "./reducers/reducers";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
