import { Comparable } from "./Comparable";

export default abstract class Item<T> implements Comparable<T> {
  idCounter: number;
  readonly name: string;
  value: number;
  weight: number;
  readonly id: number;

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  resetIdCounter(): void {};
  use(): void {};
  abstract compareTo(other: T): number;
  abstract toString(): string;
  abstract getId(): number;
}