import { Item } from "./Item";
import { Weapon } from "./Weapon";

export class Bow<T extends Item<T>> extends Weapon<T> {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(Bow.name.toLowerCase(), baseDamage, baseDurability, value, weight);
  }

  polish() {
    this.durabilityModifier += this.MODIFIER_CHANGE_RATE;

    if (this.getEffectiveDurability() <= 1) {
      this.getEffectiveDurability();
    } else {
      this.durabilityModifier = 0.10;
      this.getEffectiveDurability();
    }
  }

  toString(): string {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.getEffectiveDurability() * 100).toFixed(2)}%`;
  }
}
