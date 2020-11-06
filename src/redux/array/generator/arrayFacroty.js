import {
  generateArrayOfFewUniqueRandomValues,
  generateArrayOfNearlySortedValues,
  generateArrayOfRandomValues,
  generateReversedArray,
} from './generator';

export const ArrayTypes = {
  RANDOM_ARRAY: 'random',
  NEARLY_SORTED_ARRAY: 'nearly',
  REVERSED_ARRAY: 'reversed',
  FEW_UNIQUE_ARRAY: 'few-unique',
};

export const arrays = [
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

export const createArray = (type = ArrayTypes.RANDOM_ARRAY) => {
  switch (type) {
    case ArrayTypes.RANDOM_ARRAY:
      return generateArrayOfRandomValues();
    case ArrayTypes.NEARLY_SORTED_ARRAY:
      return generateArrayOfNearlySortedValues();
    case ArrayTypes.REVERSED_ARRAY:
      return generateReversedArray();
    case ArrayTypes.FEW_UNIQUE_ARRAY:
      return generateArrayOfFewUniqueRandomValues();
    default:
      throw new Error(`Unexpected array type: ${type}`);
  }
};
