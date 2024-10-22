import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import thunk from "redux-thunk"; // Correct import for thunk
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({
  user: Reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // Use default middleware
});

export default store;