import { compare, swap, finish } from './events';

const bubbleSort = (elements) => {
  const actions = [];

  const { length } = elements;
  const newElements = [...elements];

  for (let i = 0; i < length - 1; i += 1) {
    let swapped = false;

    for (let j = 0; j < length - i - 1; j += 1) {
      actions.push(compare(j, j + 1));
      if (newElements[j].value > newElements[j + 1].value) {
        [newElements[j], newElements[j + 1]] = [newElements[j + 1], newElements[j]];

        actions.push(swap(j, j + 1));

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  actions.push(finish());

  return actions;
};

export default bubbleSort;
