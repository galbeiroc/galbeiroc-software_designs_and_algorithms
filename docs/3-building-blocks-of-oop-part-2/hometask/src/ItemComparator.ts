import { Comparator } from "./Comparator";
import Item from "./Item";

export interface ItemComparator<Item> extends Comparator<Item> {
  compare(first: Item, second: Item): number
}
