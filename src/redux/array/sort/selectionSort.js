import {createArrayWithNewClassNames} from "../generator/generator";

export const selectionSort = (elements) => {
  const events = [];

  const length = elements.length;
  const newElements = [...elements];

  for (let i = 0; i < length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < length; j++) {
      events.push(createCompareEvent(newElements, j, i, minIdx));
      if (newElements[j].value < newElements[minIdx].value) {
        minIdx = j;
      }
    }
    [newElements[i], newElements[minIdx]] = [newElements[minIdx], newElements[i]];

    events.push(createArrayWithNewClassNames(newElements, 'swap', i, minIdx))

  }

  events.push(createArrayWithNewClassNames(newElements, 'sorted', ...newElements.keys()));

  return events;
}

const createCompareEvent = (elements, i, j, focused) => {
  const newElements = createArrayWithNewClassNames(elements, 'comparing', i, j);

  newElements[focused] = { ...elements[focused], className: 'focused' }

  return newElements;
}