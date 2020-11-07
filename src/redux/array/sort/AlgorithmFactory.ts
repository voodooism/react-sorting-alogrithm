import BubbleSort from './BubbleSort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import { ArrayElement } from '../generator/ArrayFactory';

export enum AlgorithmTypes {
  BUBBLE_SORT = 'bubble_sort',
  SELECTION_SORT = 'selection_sort',
  INSERTION_SORT = 'insertion_sort',
}

interface AlgorithmInfo {
  slug: string,
  name: string,
  complexity: string,
  sortFunc: SortingAlgorithm,
}

export const algorithms: Array<AlgorithmInfo> = [
  {
    slug: AlgorithmTypes.BUBBLE_SORT,
    name: 'Bubble sort',
    complexity: 'O(n^2)',
    sortFunc: BubbleSort,
  },
  {
    slug: AlgorithmTypes.SELECTION_SORT,
    name: 'Selection sort',
    complexity: 'O(n^2)',
    sortFunc: SelectionSort,
  },
  {
    slug: AlgorithmTypes.INSERTION_SORT,
    name: 'Insertion sort',
    complexity: 'O(n^2)',
    sortFunc: InsertionSort,
  },
];

interface SortingAlgorithm {
  (elements: Array<ArrayElement>): Array<any>;
}

export class AlgorithmFactory {
  static getAlgorithm(slug: AlgorithmTypes): SortingAlgorithm {
    const { sortFunc } = algorithms.find((algorithm) => algorithm.slug === slug) || {};

    if (!sortFunc) {
      throw new Error(`Unexpected algorithm type ${slug}`);
    }

    return sortFunc;
  }
}
