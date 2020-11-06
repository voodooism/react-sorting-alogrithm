import { compare, swap, finish } from './events';

const selectionSort = (elements) => {
  const actions = [];

  const { length } = elements;
  const newElements = [...elements];

  for (let i = 0; i < length - 1; i += 1) {
    let minIdx = i;

    for (let j = i + 1; j < length; j += 1) {
      actions.push(compare(j, i, minIdx));

      if (newElements[j].value < newElements[minIdx].value) {
        minIdx = j;
      }
    }

    [newElements[i], newElements[minIdx]] = [newElements[minIdx], newElements[i]];

    actions.push(swap(i, minIdx));
  }

  actions.push(finish());

  return actions;
};

export default selectionSort;
