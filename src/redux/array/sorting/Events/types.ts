export enum EventTypes {
  COMPARE = 'COMPARE',
  SWAP = 'SWAP',
}

export interface SortingEvent {
  readonly type: EventTypes,
  readonly firstIndex: number,
  readonly secondIndex: number,
  readonly focusedIndex?: number,
}
