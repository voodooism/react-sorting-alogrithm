import {
  SET_ARRAY,
  GENERATE_ARRAY,
  CHANGE_ALGORITHM, START_SORTING, STOP_SORTING, SAVE_TIMEOUTS
} from "./types";

import { createArray, RANDOM_ARRAY } from "./generator/arrayFacroty";
import { getSortFunction, BUBBLE_SORT} from "./sort/algorithmFactory";
import {createArrayWithNewClassNames} from "./generator/generator";

const initialState = {
  type: RANDOM_ARRAY,
  sortFunction: getSortFunction(BUBBLE_SORT),
  elements: createArray(RANDOM_ARRAY),
  isSortingProcessStarted: false,
  timeouts: []
}

const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ALGORITHM:
      return {
        ...state,
        sortFunction: getSortFunction(action.payload)
      }
    case GENERATE_ARRAY:
      const type = action.payload ?? state.type;
      return {
        ...state,
        type,
        elements: createArray(type)
      }
    case SET_ARRAY:
      return {
        ...state,
        elements: action.payload
      }
    case START_SORTING:
      return {
        ...state,
        isSortingProcessStarted: true,
        elements: createArrayWithNewClassNames(state.elements, '', ...state.elements.keys())
      }
    case STOP_SORTING:
      state.timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      return {
        ...state,
        timeouts: [],
        isSortingProcessStarted: false,
      }
    case SAVE_TIMEOUTS:
      return {
        ...state,
        timeouts: action.payload
      }
    default:
      return state;
  }
}

export default arrayReducer;