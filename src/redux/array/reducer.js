import {
  SET_ARRAY,
  GENERATE_ARRAY,
  CHANGE_ALGORITHM
} from "./types";

import { generateArray, RANDOM_ARRAY } from "./generator/arrayFacroty";
import { getSortFunction, BUBBLE_SORT} from "./sort/algorithmFactory";

const initialState = {
  type: RANDOM_ARRAY,
  sortFunction: getSortFunction(BUBBLE_SORT),
  elements: generateArray(RANDOM_ARRAY)
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
        elements: generateArray(type)
      }
    case SET_ARRAY:
      return {
        ...state,
        elements: action.payload
      }
    default:
      return state;
  }
}

export default arrayReducer;