import {compareTwoElements, finishSorting, swapTwoElements} from "../reducer";

export const insertionSort = (elements) => {
  const actions = [];

  const length = elements.length;
  const newElements = [...elements];

  for (let i = 1; i < length; i++) {
    let j = i;

    while(j > 0) {
      actions.push(compareTwoElements({firstIndex: j, secondIndex: j - 1}));

      if (newElements[j].value < newElements[j-1].value) {
        [newElements[j], newElements[j-1]] = [newElements[j-1], newElements[j]];

        actions.push(swapTwoElements({firstIndex: j, secondIndex: j - 1}));

      } else {
        break;
      }
      j--;
    }
  }

  actions.push(finishSorting());

  return actions;
}