import {compareTwoElements, finishSorting, swapTwoElements} from "../reducer";

export const selectionSort = (elements) => {
  const actions = [];

  const length = elements.length;
  const newElements = [...elements];

  for (let i = 0; i < length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < length; j++) {
      actions.push(compareTwoElements({firstIndex: j, secondIndex: i, focused: minIdx}));

      if (newElements[j].value < newElements[minIdx].value) {
        minIdx = j;
      }
    }
    [newElements[i], newElements[minIdx]] = [newElements[minIdx], newElements[i]];

    actions.push(swapTwoElements({firstIndex: i, secondIndex: minIdx}));
  }

  actions.push(finishSorting());

  return actions;
}