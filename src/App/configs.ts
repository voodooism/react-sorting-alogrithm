import { ArrayTypes } from '../redux/array/ArrayFactory/ArrayFactory';
import { AlgorithmTypes } from '../redux/array/sorting/AlgorithmFactory';

export interface ArrayConfig {
  slug: ArrayTypes,
  name: string,
}

export const arrays: Array<ArrayConfig> = [
  {
    slug: ArrayTypes.RANDOM_ARRAY,
    name: 'Random',
  },
  {
    slug: ArrayTypes.NEARLY_SORTED_ARRAY,
    name: 'Nearly sorted',
  },
  {
    slug: ArrayTypes.REVERSED_ARRAY,
    name: 'Reversed array',
  },
  {
    slug: ArrayTypes.FEW_UNIQUE_ARRAY,
    name: 'Few unique elements',
  },
];

export interface AlgorithmConfig {
  slug: string,
  name: string,
  complexity: string,
}

export const algorithms: Array<AlgorithmConfig> = [
  {
    slug: AlgorithmTypes.BUBBLE_SORT,
    name: 'Bubble sort',
    complexity: 'O(n^2)',
  },
  {
    slug: AlgorithmTypes.SELECTION_SORT,
    name: 'Selection sort',
    complexity: 'O(n^2)',
  },
  {
    slug: AlgorithmTypes.INSERTION_SORT,
    name: 'Insertion sort',
    complexity: 'O(n^2)',
  },
];
