import { Item } from "./Item";
import { Weapon } from "./Weapon";

export class Sword<T extends Item<T>> extends Weapon<T> {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(Sword.name.toLowerCase(), baseDamage, baseDurability, value, weight);
  }

  polish() {
    this.damageModifier += this.MODIFIER_CHANGE_RATE;
  }

  toString(): string {
    const resultDamage = this.getEffectiveDamage() + this.damageModifier;

    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}, Damage: ${resultDamage.toFixed(2)}, Durability: ${(this.baseDurability * 100).toFixed(2)}%`;
  }
}
