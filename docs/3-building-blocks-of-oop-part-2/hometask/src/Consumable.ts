import Item from "./Item";

abstract class Consumable<T> extends Item<T> {
  isComsumed: boolean;
  isPoiled: boolean;

  constructor(name: string, value: number, weight: number, isPoiled: boolean) {
    super(name, value, weight);
    this.isPoiled = isPoiled;
  }
}