import {
  GENERATE_ARRAY,
  SET_ARRAY,
  CHANGE_ALGORITHM
} from "./types";

export const generateArray = (payload) => {
  return {
    type: GENERATE_ARRAY,
    payload
  }
}

export const setArray = (payload) => {
  return {
    type: SET_ARRAY,
    payload
  }
}

export const changeAlgorithm = (payload) => {
  return {
    type: CHANGE_ALGORITHM,
    payload
  }
}