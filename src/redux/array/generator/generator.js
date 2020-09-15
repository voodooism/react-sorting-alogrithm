export const generateArrayOfRandomValues = ({ min = 5, max = 80, count = 16 } = {}) => {
  const array = [];

  for(let i = 0; i < count; i++) {
    const value = Math.floor(Math.random() * (max - min + 1) + min);
    array[i] = createArrayElement(value);
  }

  return array;
}

export const generateArrayOfFewUniqueRandomValues = ({ min = 5, max = 80, count = 16 } = {}) => {
  const array = [];

  const uniqueValuesPool = [];

  while (uniqueValuesPool.length < 4) {
    const value = Math.floor(Math.random() * (max - min + 1) + min);

    if (!uniqueValuesPool.includes(value)) {
      uniqueValuesPool.push(value);
    }
  }

  for(let i = 0; i < count; i++) {
    const value = uniqueValuesPool[Math.floor(Math.random() * 4)];
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
    let swap = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = swap;
  }

  return array;
}

export const generateReversedArray = (payload = {}) => {
  return generateArrayOfRandomValues(payload)
    .sort((a, b) => b.value - a.value)
}

export const createArrayElement  = (value, className = '') => {
  return {
    value,
    className
  }
}

export const createArrayWithNewClassNames = (array, className, ...indexes) => {
  const newArray = array.slice();

  for (const index of indexes) {
    if (typeof newArray[index] !== 'undefined') {
      newArray[index] = { ...array[index], className};
    }
  }

  return newArray;
}