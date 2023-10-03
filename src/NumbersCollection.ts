import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    const rightIndex = leftIndex + 1;
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number): void {
    const rightIndex = leftIndex + 1;
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
