export const generateArrayOfRandomValues = ({ min = 5, max = 80, count = 16 } = {}) => {
  const array = [];

  for(let i = 0; i < count; i++) {
    const value = Math.floor(Math.random() * (max - min + 1) + min);
    array[i] = createArrayElement(value);
  }

  return array;
}

export const generateArrayOfFewUniqueRandomValues = ({ min = 5, max = 80, count = 16 } = {}) => {
  const NUMBER_OF_UNIQUE_ELEMENTS = 4;

  const array = [];

  const uniqueValuesPool = [];

  while (uniqueValuesPool.length < NUMBER_OF_UNIQUE_ELEMENTS) {
    const value = Math.floor(Math.random() * (max - min + 1) + min);

    if (!uniqueValuesPool.includes(value)) {
      uniqueValuesPool.push(value);
    }
  }

  for(let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * NUMBER_OF_UNIQUE_ELEMENTS);
    const value = uniqueValuesPool[randomIndex];
    array[i] = createArrayElement(value);
  }

  return array;
}

export const generateArrayOfNearlySortedValues = (payload = {}) => {
  const array = generateArrayOfRandomValues(payload)
    .sort((a, b) => a.value - b.value);

  const countOfSwappedElements = Math.round(array.length * 0.2);

  for (let i = 0; i < countOfSwappedElements; i++) {
    const firstIndex = Math.floor(Math.random()* array.length);
    const secondIndex = Math.floor(Math.random()* array.length);

    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
  }

  return array;
}

export const generateReversedArray = (payload = {}) => {
  return generateArrayOfRandomValues(payload)
    .sort((a, b) => b.value - a.value)
}

const createArrayElement  = (value, className = '') => {
  return {
    value,
    className
  }
}