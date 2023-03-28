import { Consumable } from "./Consumable";
import { Item } from "./Item";

export class Pizza<T extends Item<T>> extends Consumable<T> {
  readonly numberOfSlices: number;
  numberOfEatenSlices: number = 0;

  constructor(value: number, weight: number, numberOfSlices: number, isSpoiled: boolean) {
    super(Pizza.name.toLowerCase(), value, weight, isSpoiled);
    this.numberOfSlices = numberOfSlices;
  }

  getNumberOfEatenSlices(): number {
    if (this.numberOfSlices === 0) {
      return this.numberOfEatenSlices;
    } else if (this.numberOfEatenSlices >= 0) {
      return this.numberOfEatenSlices
    }
  }

  use() {
    if (this.numberOfSlices === this.numberOfEatenSlices) {
      return "There's nothing left of the pizza to consume.";
    } else if (this.numberOfSlices >= 1 ) {
      this.numberOfEatenSlices += 1;
      return "You consumed a slice of the pizza.";
    }
  }
}
