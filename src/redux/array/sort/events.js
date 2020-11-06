export const EventTypes = {
  COMPARE: 'COMPARE',
  SWAP: 'SWAP',
  FINISH: 'FINISH',
};

export const compare = (firstIndex, secondIndex, focusedIndex) => ({
  type: EventTypes.COMPARE,
  firstIndex,
  secondIndex,
  focusedIndex,
});

export const swap = (firstIndex, secondIndex) => ({
  type: EventTypes.SWAP,
  firstIndex,
  secondIndex,
});

export const finish = () => ({
  type: EventTypes.FINISH,
});
