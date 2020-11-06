import bubbleSort from './bubbleSort';
import insertionSort from './insertionSort';
import selectionSort from './selectionSort';

export const AlgorithmTypes = {
  BUBBLE_SORT: 'bubble_sort',
  SELECTION_SORT: 'selection_sort',
  INSERTION_SORT: 'insertion_sort',
};

export const algorithms = [
  {
    slug: AlgorithmTypes.BUBBLE_SORT,
    name: 'Bubble sort',
    complexity: 'O(n^2)',
    sort: bubbleSort,
  },
  {
    slug: AlgorithmTypes.SELECTION_SORT,
    name: 'Selection sort',
    complexity: 'O(n^2)',
    sort: selectionSort,
  },
  {
    slug: AlgorithmTypes.INSERTION_SORT,
    name: 'Insertion sort',
    complexity: 'O(n^2)',
    sort: insertionSort,
  },
];

export const getSortFunction = (slug) => {
  const { sort } = algorithms.find((algorithm) => algorithm.slug === slug) || {};

  if (!sort) {
    throw new Error(`Unexpected algorithm type ${slug}`);
  }

  return sort;
};
