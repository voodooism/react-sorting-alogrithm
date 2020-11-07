import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { AlgorithmFactory } from './sort/AlgorithmFactory';
import { EventTypes } from './sort/Events/types';
import {
  compareTwoElements,
  markArrayElementsAsSorted, saveComparisons, saveInversions,
  saveTimeouts,
  startSorting,
  stopSorting,
  swapTwoElements,
  TwoElementOperation,
} from './reducer';

const sortArray = createAsyncThunk<
void,
void,
{
  dispatch: AppDispatch,
  state: RootState
}
>(
  'array/sort',
  (payload: void, { dispatch, getState }): void => {
    dispatch(startSorting());

    const {
      array: { array: { elements }, sorting: { algorithm: algorithmType, speed } },
    } = getState();

    const sortFunction = AlgorithmFactory.getAlgorithm(algorithmType);

    const sortingEvents = sortFunction(elements);

    const timeouts = [];

    let comparisons = 0;
    let inversions = 0;

    sortingEvents.forEach((event, index) => {
      let action: PayloadAction<TwoElementOperation>;

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
        default:
          throw new Error('Undefined sorting event type');
      }

      const timeoutId = window.setTimeout(() => dispatch(action), speed * index);

      timeouts.push(timeoutId);
    });

    timeouts.push(window.setTimeout(
      () => dispatch(markArrayElementsAsSorted()),
      speed * timeouts.length,
    ));
    timeouts.push(window.setTimeout(
      () => dispatch(stopSorting()),
      speed * timeouts.length,
    ));

    dispatch(saveTimeouts(timeouts));
    dispatch(saveComparisons(comparisons));
    dispatch(saveInversions(inversions));
  },
);

export default sortArray;
