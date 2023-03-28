import { Comparable } from "./Comparable";
import { Item } from "./Item";

export abstract class Consumable<T extends Comparable<T>> extends Item<T> {
  isConsumed: boolean = false;
  isSpoiled: boolean;

  constructor(name: string, value: number, weight: number, isSpoiled: boolean) {
    super(name, value, weight);
    this.isSpoiled = isSpoiled;
  }


  use() {
    if (this.isConsumed) {
      return "There's nothing left of the bread to consume.";
    } else if (this.isSpoiled) {
      return "You consumed the bread.\nYou feel sick.";
    } else {
      return "You consumed the bread.";
    }
  }
}
