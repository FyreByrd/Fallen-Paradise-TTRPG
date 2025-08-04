---
title: Combat Rules
created: 2024-12-15T22:01:33-05:00
modified: 2025-08-04T16:07:52-04:00
---
Combat occurs in rounds of 6 second increments in game. During a players turn, they may take a number of actions equal to `&LeftCeiling;PB / 2&RightCeiling;`. It is worth noting that some spells or other actions may take more than one action to do (and thus cannot be done until higher levels). There is no distinction between a roll to hit and a roll for damage. Just roll for damage and the target will take a defensive reaction in response.

As of right now, combat order is determined by rolling for initiative (`Reflex`). This may change later (We playtested unstructured turn order a la Fabula Ultima and it didn't work too well).

### Attack Types
- Melee: `2 * Strength + Weapon modifiers`
- Unarmed Combat: `Strength + Dexterity`
- Finesse Weapons: `Strength + Dexterity + Weapon modifiers`
- Ranged: `Dexterity + Acuity + Weapon modifiers - Range Penalties` (`Strength` may be added for some weapon types)

Multiple physical attacks may be performed in one action, depending on the type of weapon used. If a light weapon is used, 3 attacks may be performed. If a heavy weapon is used, only two attacks may be performed, but all applicable bonuses are doubled. As of right now, all physical attacks have half damage, but this restriction may be removed after Orion crunches the numbers against natural armor and his suggestions on creature creation rules.

### Defensive Reactions

The number of reactions a character may use per round is equal to `2 * #actions + (Acuity Bonus + Dexterity Bonus (minimum 0))`

- Block: `Strength + Fortitude`. Subtract the result from the potential damage.
- Parry: `Strength + Dexterity + Attack bonuses`. If the result is greater than the potential damage, deal damage equal to the difference instead of taking damage.
- Dodge/Reflex Save: `Dexterity + Acuity - Armor penalties`. If the result is greater than the potential damage, take no damage. If the attack has area of effect, take half damage rather than no damage.
- Countercast: `Acuity + Casting Stat + Spell Level`. Effect depends on spell
- Fortitude Save: `2 * Fortitude`
- Will Save: `Intellect + Will`
- Focus Save: `Fortitude + Will`

## Armor

Armor reduces incoming damage by its value. All creatures have natural armor equal to their `Strength Bonus + Fortitude Bonus` (and yes, if the armor is negative, the creature will take extra damage). Any physical armor that is worn applies a penalty to `Dexterity` equal to its value minus `Strength Bonus + Dexterity Bonus`. This penalty is factored in when calculating move speed.

## Damage Types

Every source of damage deals damage of a specific type.

List of types: `coming soon`

### Resistance

If a creature is resistant to a specific damage type, damage of that type is halved against that creature for each level of resistance. The damage is then further reduced by a single `Fortitude` roll for each level of resistance. Damage cannot be reduced below 1 by this feature.

### Vulnerability

If a creature is vulnerable to a damage type, damage of that type is doubled against that creature for each level of vulnerability.
