import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ArrayFactory, ArrayTypes, ArrayElement, ArrayElementState,
} from './generator/ArrayFactory';

import { AlgorithmTypes } from './sort/AlgorithmFactory';

const BASE_DELAY_BETWEEN_ANIMATIONS_MS = 1000;

const DEFAULT_SORTING_SPEED_VALUE = 500;

const arrayFactory = new ArrayFactory(10, 99, 16);

interface ArrayState {
  array: {
    type: ArrayTypes,
    elements: Array<ArrayElement>
  }
  sorting: {
    isStarted: boolean,
    algorithm: AlgorithmTypes,
    currentState: Array<ArrayElement>,
    timeouts: Array<number>,
    inversions: number | undefined,
    comparisons: number | undefined
    speed: number,
  }
}

export interface TwoElementOperation {
  firstIndex: number,
  secondIndex:number,
}

interface CompareTwoElements extends TwoElementOperation {
  focused?: number
}

interface SwapTwoElements extends TwoElementOperation {}

const initialElements = arrayFactory.createArray(
  ArrayTypes.RANDOM_ARRAY,
);

const initialState: ArrayState = {
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

const arrayReducer = createSlice({
  name: 'array',
  initialState,
  reducers: {
    changeAlgorithm(state, action: PayloadAction<AlgorithmTypes>) {
      state.sorting.algorithm = action.payload;
    },

    generateArray(state, action: PayloadAction<ArrayTypes|null|undefined>) {
      state.array.type = action.payload ?? state.array.type;

      const newArray = arrayFactory.createArray(state.array.type);

      state.array.elements = [...newArray];
      state.sorting.currentState = [...newArray];

      state.sorting.inversions = undefined;
      state.sorting.comparisons = undefined;
    },

    setArray(state, action: PayloadAction<Array<ArrayElement>>) {
      state.array.elements = action.payload;
    },

    compareTwoElements(state, action: PayloadAction<CompareTwoElements>) {
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

    swapTwoElements(state, action: PayloadAction<SwapTwoElements>) {
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

    markArrayElementsAsSorted(state) {
      state.sorting.currentState.forEach((el) => { el.state = ArrayElementState.SORTED; });
    },

    saveTimeouts(state, action: PayloadAction<Array<number>>) {
      state.sorting.timeouts = action.payload;
    },

    saveComparisons(state, action: PayloadAction<number>) {
      state.sorting.comparisons = action.payload;
    },

    saveInversions(state, action: PayloadAction<number>) {
      state.sorting.inversions = action.payload;
    },

    setSortingSpeed(state, action: PayloadAction<number>) {
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
  markArrayElementsAsSorted,
  setSortingSpeed,
} = arrayReducer.actions;

export default arrayReducer.reducer;
