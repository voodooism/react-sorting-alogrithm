import { compare, swap, finish } from './events';

const insertionSort = (elements) => {
  const actions = [];

  const { length } = elements;
  const newElements = [...elements];

  for (let i = 1; i < length; i += 1) {
    let j = i;

    while (j > 0) {
      actions.push(compare(j, j - 1));

      if (newElements[j].value < newElements[j - 1].value) {
        [newElements[j], newElements[j - 1]] = [newElements[j - 1], newElements[j]];

        actions.push(swap(j, j - 1));
      } else {
        break;
      }

      j -= 1;
    }
  }

  actions.push(finish());

  return actions;
};

export default insertionSort;
