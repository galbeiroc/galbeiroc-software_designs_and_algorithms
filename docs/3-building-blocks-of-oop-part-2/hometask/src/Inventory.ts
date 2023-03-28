import { Comparable } from "./Comparable";
import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory<T extends Comparable<T>> {
  items: Item<T>[] = [];

  constructor() {};

  addItem<T extends Item<T>>(item: Item<T>): void {
    this.items.push(item);
  }

  sort(): void;
  sort<T extends Item<T>>(comparator?: ItemComparator<T>) {
    if (comparator) {
      
    }
    return this.items.sort((item1, item2) => item1.value - item2.value);
  }

  toString(): string {
    return this.items.join(', ');
  }
}