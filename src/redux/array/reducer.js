import {ArrayTypes, createArray} from "./generator/arrayFacroty";
import {AlgorithmTypes, getSortFunction} from "./sort/algorithmFactory";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialElements = createArray();

const initialState = {
  array: {
    type: ArrayTypes.RANDOM_ARRAY,
    elements: [...initialElements]
  },
  sorting: {
    isStarted: false,
    algorithm: AlgorithmTypes.BUBBLE_SORT,
    currentState: [...initialElements],
    timeouts: [],
    inversions: undefined,
    comparisons: undefined
  }
}

export const sortArray = createAsyncThunk(
  'array/sort',
  (payload, {dispatch, getState}) => {
    dispatch(startSorting());

    const { array: { array: {elements}, sorting: {algorithm}}} = getState();

    const sortFunction = getSortFunction(algorithm);

    const actions = sortFunction(elements);

    const timeouts = [];

    let comparisons = 0;
    let inversions = 0;

    actions.forEach((action, index) => {
      const timeoutId = setTimeout(() => dispatch(action), 400 * index);

      timeouts.push(timeoutId);

      if (action.type === compareTwoElements.type) {
        comparisons++;
      }

      if (action.type === swapTwoElements.type) {
        inversions++;
      }
    });

    timeouts.push(setTimeout(() => dispatch(stopSorting()), 400 * timeouts.length));

    dispatch(saveTimeouts(timeouts));
    dispatch(saveComparisons(comparisons));
    dispatch(saveInversions(inversions));
  }
)

const arraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    changeAlgorithm(state, action) {
      state.sorting.algorithm = action.payload;
    },
    generateArray(state, action) {
      const newArray = createArray(action.payload ?? state.array.type);
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
        currentState[focused] = {...currentState[focused], className: 'focused'};
      }
      currentState[firstIndex] = {...currentState[firstIndex], className: 'comparing'};
      currentState[secondIndex] = {...currentState[secondIndex], className: 'comparing'};
      state.sorting.currentState = currentState;
    },
    swapTwoElements(state, action) {
      const {array: {elements}} = state;
      const { firstIndex, secondIndex } = action.payload;

      const currentState = [...elements];

      currentState[firstIndex] = {...currentState[firstIndex], className: 'swap'};
      currentState[secondIndex] = {...currentState[secondIndex], className: 'swap'};

      [currentState[firstIndex], currentState[secondIndex]] = [currentState[secondIndex],  currentState[firstIndex]];
      [elements[firstIndex], elements[secondIndex]] = [elements[secondIndex],  elements[firstIndex]];

      state.sorting.currentState = currentState;
      state.array.elements = elements;
    },
    startSorting(state, action) {
      state.sorting.isStarted = true;
      state.array.elements.forEach((element) => element.className = '');
    },
    stopSorting(state, action) {
      state.sorting.timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      state.sorting.timeouts = [];
      state.sorting.isStarted = false;
    },
    finishSorting(state, action) {
      state.sorting.currentState.forEach((el) => el.className = 'sorted');
    },
    saveTimeouts(state, action) {
      state.sorting.timeouts = action.payload
    },
    saveComparisons(state, action) {
      state.sorting.comparisons = action.payload;
    },
    saveInversions(state, action) {
      state.sorting.inversions = action.payload;
    }
  }
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
  finishSorting
} = arraySlice.actions;

export default arraySlice.reducer;