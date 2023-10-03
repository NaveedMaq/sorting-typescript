import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    const rightIndex = leftIndex + 1;
    const leftChar = this.data[leftIndex].toLowerCase();
    const rightChar = this.data[rightIndex].toLowerCase();

    return leftChar > rightChar;
  }

  swap(leftIndex: number): void {
    const rightIndex = leftIndex + 1;

    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
}
