import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  tail: Node | null = null;
  length: number = 0;

  add(data: number): void {
    const node = new Node(data);
    this.length++;

    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  at(index: number): Node {
    if (this.length === 0) throw new Error('Index out of bounds');

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number): boolean {
    if (this.length === 0) throw new Error('List is empty');

    const rightIndex = leftIndex + 1;
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number): void {
    const rightIndex = leftIndex + 1;

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (this.length === 0) return;

    let node = this.head;

    let str = '';
    while (node) {
      str += node.data + '  ';
      node = node.next;
    }

    console.log(str);
  }
}
