import { EventTypes, SortingEvent } from './types';

export default class SwapEvent implements SortingEvent {
  readonly type: EventTypes = EventTypes.SWAP;

  constructor(
    readonly firstIndex: number,
    readonly secondIndex: number,
  ) {}
}
