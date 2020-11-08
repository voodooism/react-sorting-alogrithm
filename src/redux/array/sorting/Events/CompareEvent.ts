import { EventTypes, SortingEvent } from './types';

export default class CompareEvent implements SortingEvent {
  readonly type: EventTypes = EventTypes.COMPARE;

  constructor(
    readonly firstIndex: number,
    readonly secondIndex: number,
    readonly focusedIndex?: number,
  ) {}
}
