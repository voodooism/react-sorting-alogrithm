import arrayReducer from "./array/reducer";
import {configureStore, combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  array: arrayReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;