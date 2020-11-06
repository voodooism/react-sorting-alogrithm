import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ArrayTypes, createArray } from './generator/arrayFacroty';
import { AlgorithmTypes, getSortFunction } from './sort/algorithmFactory';
import { EventTypes } from './sort/events';
import { ArrayElementState } from './generator/generator';

const initialElements = createArray();

const BASE_DELAY_BETWEEN_ANIMATIONS_MS = 1000;

const DEFAULT_SORTING_SPEED_VALUE = 500;

const initialState = {
  array: {
    type: ArrayTypes.RANDOM_ARRAY,
    elements: [...initialElements],
  },
  sorting: {
    isStarted: false,
    algorithm: AlgorithmTypes.BUBBLE_SORT,
    currentState: [...initialElements],
    timeouts: [],
    inversions: undefined,
    comparisons: undefined,
    speed: BASE_DELAY_BETWEEN_ANIMATIONS_MS - DEFAULT_SORTING_SPEED_VALUE,
  },
};

const arraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    changeAlgorithm(state, action) {
      state.sorting.algorithm = action.payload;
    },

    generateArray(state, action) {
      state.array.type = action.payload ?? state.array.type;
      const newArray = createArray(state.array.type);
      state.array.elements = [...newArray];
      state.sorting.currentState = [...newArray];
      state.sorting.inversions = undefined;
      state.sorting.comparisons = undefined;
    },

    setArray(state, action) {
      state.array.elements = action.payload;
    },

    compareTwoElements(state, action) {
      const currentState = [...state.array.elements];
      const { firstIndex, secondIndex, focused } = action.payload;

      if (focused) {
        currentState[focused] = { ...currentState[focused], state: ArrayElementState.FOCUSED };
      }

      currentState[firstIndex] = {
        ...currentState[firstIndex], state: ArrayElementState.COMPARING,
      };

      currentState[secondIndex] = {
        ...currentState[secondIndex], state: ArrayElementState.COMPARING,
      };

      state.sorting.currentState = currentState;
    },

    swapTwoElements(state, action) {
      const { array: { elements } } = state;
      const { firstIndex, secondIndex } = action.payload;

      const currentState = [...elements];

      currentState[firstIndex] = {
        ...currentState[firstIndex], state: ArrayElementState.SWAPPED,
      };

      currentState[secondIndex] = {
        ...currentState[secondIndex], state: ArrayElementState.SWAPPED,
      };

      [currentState[firstIndex], currentState[secondIndex]] = [
        currentState[secondIndex], currentState[firstIndex],
      ];

      [elements[firstIndex], elements[secondIndex]] = [elements[secondIndex], elements[firstIndex]];

      state.sorting.currentState = currentState;
      state.array.elements = elements;
    },

    startSorting(state) {
      state.sorting.isStarted = true;
      state.array.elements.forEach((element) => { element.state = ArrayElementState.INITIAL; });
    },

    stopSorting(state) {
      state.sorting.timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      state.sorting.timeouts = [];
      state.sorting.isStarted = false;
    },

    finishSorting(state) {
      state.sorting.currentState.forEach((el) => { el.state = ArrayElementState.SORTED; });
    },

    saveTimeouts(state, action) {
      state.sorting.timeouts = action.payload;
    },

    saveComparisons(state, action) {
      state.sorting.comparisons = action.payload;
    },

    saveInversions(state, action) {
      state.sorting.inversions = action.payload;
    },

    setSortingSpeed(state, action) {
      state.sorting.speed = BASE_DELAY_BETWEEN_ANIMATIONS_MS - action.payload;
    },
  },
});

export const {
  changeAlgorithm,
  generateArray,
  setArray,
  startSorting,
  stopSorting,
  saveTimeouts,
  saveComparisons,
  saveInversions,
  compareTwoElements,
  swapTwoElements,
  finishSorting,
  setSortingSpeed,
} = arraySlice.actions;

export const sortArray = createAsyncThunk(
  'array/sort',
  (payload, { dispatch, getState }) => {
    dispatch(startSorting());

    const { array: { array: { elements }, sorting: { algorithm, speed } } } = getState();

    const sortFunction = getSortFunction(algorithm);

    const events = sortFunction(elements);

    const timeouts = [];

    let comparisons = 0;
    let inversions = 0;

    events.forEach((event, index) => {
      let action;

      switch (event.type) {
        case EventTypes.COMPARE:
          action = compareTwoElements(
            {
              firstIndex: event.firstIndex,
              secondIndex: event.secondIndex,
              focused: event.focusedIndex,
            },
          );
          comparisons += 1;
          break;
        case EventTypes.SWAP:
          action = swapTwoElements(
            {
              firstIndex: event.firstIndex,
              secondIndex: event.secondIndex,
            },
          );
          inversions += 1;
          break;
        case EventTypes.FINISH:
          action = finishSorting();
          break;
        default:
          throw new Error('Undefined sorting event type');
      }

      const timeoutId = setTimeout(() => dispatch(action), speed * index);

      timeouts.push(timeoutId);
    });

    timeouts.push(setTimeout(() => dispatch(stopSorting()), speed * timeouts.length));

    dispatch(saveTimeouts(timeouts));
    dispatch(saveComparisons(comparisons));
    dispatch(saveInversions(inversions));
  },
);

export default arraySlice.reducer;
