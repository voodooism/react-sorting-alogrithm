import { compareTwoElements, swapTwoElements, finishSorting } from "../reducer";

export const bubbleSort = (elements) => {
  const actions = [];

  const length = elements.length;
  const newElements = [...elements];

  for (let i = 0; i < length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < length - i - 1; j++) {
      actions.push(compareTwoElements({firstIndex: j, secondIndex: j + 1}));
      if (newElements[j].value > newElements[j + 1].value) {
        [newElements[j], newElements[j + 1]] = [newElements[j + 1], newElements[j]];

        actions.push(swapTwoElements({firstIndex: j, secondIndex: j + 1}));

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  actions.push(finishSorting())

  return actions;
}