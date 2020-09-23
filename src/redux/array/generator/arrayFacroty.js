import {
  generateArrayOfFewUniqueRandomValues,
  generateArrayOfNearlySortedValues,
  generateArrayOfRandomValues,
  generateReversedArray
} from "./generator";

export const RANDOM_ARRAY = 'random';

export const NEARLY_SORTED_ARRAY = 'nearly';

export const REVERSED_ARRAY = 'reversed';

export const FEW_UNIQUE_ARRAY = 'few-unique';

export const createArray = (type = RANDOM_ARRAY) => {
  switch (type) {
    case RANDOM_ARRAY:
      return generateArrayOfRandomValues();
    case NEARLY_SORTED_ARRAY:
      return generateArrayOfNearlySortedValues();
    case REVERSED_ARRAY:
      return generateReversedArray();
    case FEW_UNIQUE_ARRAY:
      return generateArrayOfFewUniqueRandomValues();
    default:
      throw new Error(`Unexpected array type: ${type}`);
  }
}