import arrayReducer from "./array/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  array: arrayReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;