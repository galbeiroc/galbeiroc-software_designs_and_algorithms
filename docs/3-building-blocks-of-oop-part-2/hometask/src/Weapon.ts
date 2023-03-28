import { Comparable } from "./Comparable";
import { Item } from "./Item";

export abstract class Weapon<T extends Comparable<T>> extends Item<T> {
  MODIFIER_CHANGE_RATE: number = 0.05;
  #baseDamage: number;
  damageModifier: number = 0;
  baseDurability: number;
  durabilityModifier: number = 0;
  checkDurability: number;
  #isBroken: boolean;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
    this.#baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.checkDurability = this.getEffectiveDurability();
  }

  abstract polish(): void;

  getEffectiveDamage(): number {
    return this.#baseDamage;
  }

  getEffectiveDurability(): number;
  getEffectiveDurability(durabilityModifier?: number): number {
    if (durabilityModifier) {
      this.durabilityModifier = this.baseDurability + durabilityModifier;

      return +this.durabilityModifier.toFixed(1);
    }

    return this.baseDurability + this.durabilityModifier;
  }

  use() {
    this.checkDurability = this.getEffectiveDurability() - this.MODIFIER_CHANGE_RATE;
    if (!this.#isBroken) {
      if (this.checkDurability > 0) {
        return `You use the ${this.name}, dealing 0.05 points of damage.`;
      } else if (this.checkDurability <= 0) {
        this.#isBroken = true;
        return `You use the ${this.name}, dealing 0.05 points of damage.\nThe ${this.name} breaks.`;
      }
    } else {
      throw new Error(`You can't use the ${this.name}, it is broken.`);
    }
  }

  toString(): string {
    return `bow − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.checkDurability * 100).toFixed(2)}%`
  }
}