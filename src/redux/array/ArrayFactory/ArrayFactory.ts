export enum ArrayElementState {
  INITIAL = 'initial',
  COMPARING = 'comparing',
  SWAPPED = 'swapped',
  SORTED = 'sorted',
  FOCUSED = 'focused',
}

export enum ArrayTypes {
  RANDOM_ARRAY = 'random',
  NEARLY_SORTED_ARRAY = 'nearly',
  REVERSED_ARRAY = 'reversed',
  FEW_UNIQUE_ARRAY = 'few-unique',
}

export interface ArrayElement {
  readonly value: number,
  readonly state: ArrayElementState,
}

export class ArrayFactory {
  constructor(
    private minElementValue: number,
    private maxElementValue: number,
    private countOfArrayElements: number,
  ) {}

  public createArray(type: ArrayTypes): Array<ArrayElement> {
    let array: Array<ArrayElement> = [];

    switch (type) {
      case ArrayTypes.RANDOM_ARRAY:
        array = this.createArrayOfRandomValues();
        break;

      case ArrayTypes.NEARLY_SORTED_ARRAY:
        array = this.createArrayOfNearlySortedValues();
        break;

      case ArrayTypes.REVERSED_ARRAY:
        array = this.createArrayOfRandomValues()
          .sort((a, b) => b.value - a.value);
        break;

      case ArrayTypes.FEW_UNIQUE_ARRAY:
        array = this.createArrayOfFewUniqueRandomValues();
        break;

      default:
        throw new Error(`Unexpected array type: ${type}`);
    }

    return array;
  }

  private createArrayOfRandomValues(): Array<ArrayElement> {
    const array: Array<ArrayElement> = [];

    for (let i = 0; i < this.countOfArrayElements; i += 1) {
      const value = this.generateRandomValue();
      array[i] = ArrayFactory.createArrayElement(value);
    }

    return array;
  }

  private createArrayOfFewUniqueRandomValues(): Array<ArrayElement> {
    const array: Array<ArrayElement> = [];

    const uniqueValuesPool: Array<number> = [];

    const numberOfUniqueElements = Math.floor(
      this.countOfArrayElements * 0.25,
    );

    while (uniqueValuesPool.length < numberOfUniqueElements) {
      const value = this.generateRandomValue();

      if (!uniqueValuesPool.includes(value)) {
        uniqueValuesPool.push(value);
      }
    }

    for (let i = 0; i < this.countOfArrayElements; i += 1) {
      const randomIndex = Math.floor(Math.random() * numberOfUniqueElements);
      const value = uniqueValuesPool[randomIndex];
      array[i] = ArrayFactory.createArrayElement(value);
    }

    return array;
  }

  private createArrayOfNearlySortedValues(): Array<ArrayElement> {
    const array = this.createArrayOfRandomValues()
      .sort((a, b) => a.value - b.value);

    const countOfSwappedElements = Math.round(array.length * 0.2);

    for (let i = 0; i < countOfSwappedElements; i += 1) {
      const firstIndex = Math.floor(Math.random() * array.length);
      const secondIndex = Math.floor(Math.random() * array.length);

      [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
    }

    return array;
  }

  private static createArrayElement(
    value: number, state: ArrayElementState = ArrayElementState.INITIAL,
  ): ArrayElement {
    return {
      value,
      state,
    };
  }

  private generateRandomValue(): number {
    return Math.floor(
      Math.random() * (this.maxElementValue - this.minElementValue + 1) + this.minElementValue,
    );
  }
}
