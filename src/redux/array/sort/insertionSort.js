import {createArrayWithNewClassNames} from "../generator/generator";

export const insertionSort = (elements) => {
  const events = [];

  const length = elements.length;
  const newElements = elements.slice();

  for (let i = 1; i < length ; i++) {
    let j = i;

    while(j > 0) {
      events.push(createArrayWithNewClassNames(newElements, 'comparing', j, j - 1));
      if (newElements[j].value < newElements[j-1].value) {
        const temp = newElements[j];
        newElements[j] = newElements[j-1];
        newElements[j-1] = temp;

        events.push(createArrayWithNewClassNames(newElements, 'swap', j, j - 1))

      } else {
        break;
      }
      j--;
    }
  }

  events.push(createArrayWithNewClassNames(newElements, 'sorted', ...newElements.keys()));

  return events;
}