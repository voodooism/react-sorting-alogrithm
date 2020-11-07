import { ArrayElement } from '../generator/ArrayFactory';
import { SortingEvent } from './Events/types';
import CompareEvent from './Events/CompareEvent';
import SwapEvent from './Events/SwapEvent';

const selectionSort = (elements: Array<ArrayElement>): Array<SortingEvent> => {
  const actions = [];

  const { length } = elements;
  const newElements = [...elements];

  for (let i = 0; i < length - 1; i += 1) {
    let minIdx = i;

    for (let j = i + 1; j < length; j += 1) {
      actions.push(
        new CompareEvent(j, i, minIdx),
      );

      if (newElements[j].value < newElements[minIdx].value) {
        minIdx = j;
      }
    }

    [newElements[i], newElements[minIdx]] = [newElements[minIdx], newElements[i]];

    actions.push(
      new SwapEvent(i, minIdx),
    );
  }

  return actions;
};

export default selectionSort;
