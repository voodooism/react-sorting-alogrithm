import { configureStore, combineReducers } from '@reduxjs/toolkit';
import arrayReducer from './array/reducer';

const rootReducer = combineReducers({
  array: arrayReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
