import { Comparator } from "./Comparator";
import { Item } from "./Item";

export interface ItemComparator<T extends Item<T>> extends Comparator<T> {
  compare(first: Item<T>, second: Item<T>): number
}
