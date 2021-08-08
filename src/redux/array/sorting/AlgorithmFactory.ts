import BubbleSort from './BubbleSort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import { ArrayElement } from '../ArrayFactory/ArrayFactory';

export enum AlgorithmTypes {
  BUBBLE_SORT = 'bubble_sort',
  SELECTION_SORT = 'selection_sort',
  INSERTION_SORT = 'insertion_sort',
}

interface SortingAlgorithm {
  (elements: Array<ArrayElement>): Array<any>;
}

const algorithmsMap: Map<AlgorithmTypes, SortingAlgorithm> = new Map(
  [
    [AlgorithmTypes.BUBBLE_SORT, BubbleSort],
    [AlgorithmTypes.SELECTION_SORT, SelectionSort],
    [AlgorithmTypes.INSERTION_SORT, InsertionSort],
  ],
);

export class AlgorithmFactory {
  static getAlgorithm(slug: AlgorithmTypes): SortingAlgorithm {
    if (!algorithmsMap.has(slug)) {
      throw new Error(`Unexpected algorithm type ${slug}`);
    }

    return algorithmsMap.get(slug) as SortingAlgorithm;
  }
}
