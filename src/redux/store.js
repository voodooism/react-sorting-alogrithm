import arrayReducer from "./array/reducer";

import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  array: arrayReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;