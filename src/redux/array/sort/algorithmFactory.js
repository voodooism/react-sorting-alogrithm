import {bubbleSort} from "./bubbleSort";
import {insertionSort} from "./insertionSort";
import {selectionSort} from "./selectionSort";

export const AlgorithmTypes = {
  BUBBLE_SORT: 'bubble_sort',
  SELECTION_SORT: 'selection_sort',
  INSERTION_SORT: 'insertion_sort'
}

export const algorithms = [
  {
    slug: AlgorithmTypes.BUBBLE_SORT,
    name: 'Bubble sort',
    complexity: 'O(n^2)'
  },
  {
    slug: AlgorithmTypes.SELECTION_SORT,
    name: 'Selection sort',
    complexity: 'O(n^2)'
  },
  {
    slug: AlgorithmTypes.INSERTION_SORT,
    name: 'Insertion sort',
    complexity: 'O(n^2)'
  }
];

export const getSortFunction = (algorithm) => {
  switch (algorithm) {
    case AlgorithmTypes.BUBBLE_SORT:
      return bubbleSort;
    case AlgorithmTypes.INSERTION_SORT:
      return insertionSort;
    case AlgorithmTypes.SELECTION_SORT:
      return selectionSort;
    default:
      throw new Error(`Unexpected algorithm type ${algorithm}`);
  }
}