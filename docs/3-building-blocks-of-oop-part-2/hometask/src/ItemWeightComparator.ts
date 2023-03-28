import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator<T extends Item<T>> implements ItemComparator<T> {
  compare(first: Item<T>, second: Item<T>): number {
    if (first.weight > second.weight) {
      return 1;
    } else if (first.weight > second.weight) {
      return -1;
    } else {
      return first.compareTo(second);
    }
  }
}