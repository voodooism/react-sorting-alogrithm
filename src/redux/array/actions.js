import {
  GENERATE_ARRAY,
  SET_ARRAY,
  CHANGE_ALGORITHM,
  START_SORTING,
  STOP_SORTING,
  SAVE_TIMEOUTS
} from "./types";

export const generateArray = (payload) => {
  return {
    type: GENERATE_ARRAY,
    payload
  }
}

export const sortArray = () => {
  return (dispatch, getState) => {
    dispatch(startSorting());

    const elements =  getState().array.elements;
    const sortFunction =  getState().array.sortFunction;

    const events = sortFunction(elements);

    const timeouts = [];

    events.forEach((value, index) => {
      const timeoutId = setTimeout(() => dispatch(setArray(value)), 400 * index);

      timeouts.push(timeoutId);
    })

    dispatch(saveTimeouts(timeouts));

    timeouts.push(setTimeout(() => dispatch(stopSorting()), 400 * timeouts.length));
  }
}

export const stopSorting = () => {
  return {
    type: STOP_SORTING
  }
}

export const changeAlgorithm = (payload) => {
  return {
    type: CHANGE_ALGORITHM,
    payload
  }
}

const setArray = (payload) => {
  return {
    type: SET_ARRAY,
    payload
  }
}

const startSorting = () => {
  return {
    type: START_SORTING
  }
}

const saveTimeouts = (payload) => {
  return {
    type: SAVE_TIMEOUTS,
    payload
  }
}