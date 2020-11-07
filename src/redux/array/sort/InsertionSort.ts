import { ArrayElement } from '../generator/ArrayFactory';
import { SortingEvent } from './Events/types';
import CompareEvent from './Events/CompareEvent';
import SwapEvent from './Events/SwapEvent';

const insertionSort = (elements: Array<ArrayElement>): Array<SortingEvent> => {
  const actions = [];

  const { length } = elements;
  const newElements = [...elements];

  for (let i = 1; i < length; i += 1) {
    let j = i;

    while (j > 0) {
      actions.push(
        new CompareEvent(j, j - 1),
      );

      if (newElements[j].value < newElements[j - 1].value) {
        [newElements[j], newElements[j - 1]] = [newElements[j - 1], newElements[j]];

        actions.push(
          new SwapEvent(j, j - 1),
        );
      } else {
        break;
      }

      j -= 1;
    }
  }

  return actions;
};

export default insertionSort;
