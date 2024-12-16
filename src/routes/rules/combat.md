---
title: Combat Rules
created: 2024-12-15T22:01:33-05:00
modified: 2024-12-15T22:33:09-05:00
---
Combat occurs in rounds of 6 second increments in game. During a players turn, they may take a number of actions equal to `LB - 1`. It is worth noting that some spells or other actions may take more than one action to do (and thus cannot be done until higher levels). There is no distinction between a roll to hit and a roll for damage. Just roll for damage and the target will take a defensive reaction in response.

### Attack Types
- Melee: `2 * Strength + Weapon modifiers`
- Unarmed Combat: `Strength + Dexterity`
- Finesse Weapons: `Strength + Dexterity + Weapon modifiers`
- Ranged: `Dexterity + Acuity + Weapon modifiers`. Range may be modified by `Strength`?

### Defensive Reactions
- Block: `Strength + Fortitude + Armor bonuses`. Subtract the result from the potential damage.
- Parry: `Strength + Dexterity + Attack bonuses`. If the result is greater than the potential damage, deal damage equal to the difference instead of taking damage.
- Dodge: `Dexterity + Acuity - Armor penalties`. If the result is greater than the potential damage, take no damage. If the attack has area of effect, take half damage rather than no damage.

## Health

At level 1, your health is equal to `Ancestry hit die + Class hit die + Fortitude`. At each level thereafter, add `Ancestry hit die + Class hit die + Fortitude` to the previous total for your new health. If a character, such as a Berserker, would temporarily increase their `Fortitude`, their max health does not change. They will instead have additional temporary health equal to their `Passive Fortitude`. Yes, this could result in very big numbers. An optimized Level 20 Berserker would on average have more than 500 health. Don't worry though. A fireball upcast to unheard of levels would probably do that much damage 😉(and maybe level a city in the process). Keep in mind that in a perfectly average build, a Level 1 character would have about 20 health and a Level 20 character would have about 400.