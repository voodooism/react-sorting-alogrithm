import {bubbleSort} from "./bubbleSort";
import {insertionSort} from "./insertionSort";
import {selectionSort} from "./selectionSort";

export const BUBBLE_SORT = 'bubble_sort';
export const SELECTION_SORT = 'selection_sort';
export const INSERTION_SORT = 'insertion_sort';

export const getSortFunction = (algorithm) => {
  switch (algorithm) {
    case BUBBLE_SORT:
      return bubbleSort;
    case INSERTION_SORT:
      return insertionSort;
    case SELECTION_SORT:
      return selectionSort;
    default:
      throw new Error(`Unexpected algorithm type ${algorithm}`);
  }
}