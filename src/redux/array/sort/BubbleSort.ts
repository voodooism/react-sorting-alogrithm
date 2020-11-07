import { ArrayElement } from '../generator/ArrayFactory';
import { SortingEvent } from './Events/types';
import CompareEvent from './Events/CompareEvent';
import SwapEvent from './Events/SwapEvent';

const bubbleSort = (elements: Array<ArrayElement>): Array<SortingEvent> => {
  const actions = [];

  const { length } = elements;
  const newElements = [...elements];

  for (let i = 0; i < length - 1; i += 1) {
    let swapped = false;

    for (let j = 0; j < length - i - 1; j += 1) {
      actions.push(
        new CompareEvent(j, j + 1),
      );
      if (newElements[j].value > newElements[j + 1].value) {
        [newElements[j], newElements[j + 1]] = [newElements[j + 1], newElements[j]];

        actions.push(
          new SwapEvent(j, j + 1),
        );

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return actions;
};

export default bubbleSort;
