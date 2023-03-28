import { Comparable } from "./Comparable";

export abstract class Item<T extends Comparable<T>> {
  static idCounter: number;
  readonly name: string;
  value: number;
  weight: number;
  readonly id: number = 0;

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    Item.idCounter += 1;
    this.id = Item.idCounter;
  }

  abstract use(): void;

  static resetIdCounter(): void {
    this.idCounter = 0;
  };

  compareTo<T extends Item<T>>(other: T): number {
    if (this.value > other.value) {
      return 1;
    } else if (this.value < other.value) {
      return -1;
    } else {
      return 0;
    }
  };

  toString(): string {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
  };

  getId(): number {
    return this.id;
  };
}
