import {createArrayWithNewClassNames} from "../generator/generator";

export const bubbleSort = (elements) => {
  const events = [];

  const length = elements.length;
  const newElements = elements.slice();

  for (let i = 0; i < length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      events.push(createArrayWithNewClassNames(newElements, 'comparing', j, j + 1));
      if (newElements[j].value > newElements[j + 1].value) {

        const buffer = newElements[j];
        newElements[j] = newElements[j + 1];
        newElements[j + 1] = buffer;

        events.push(createArrayWithNewClassNames(newElements, 'swap', j, j + 1))

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  events.push(createArrayWithNewClassNames(newElements, 'sorted', ...newElements.keys()));

  return events;
}