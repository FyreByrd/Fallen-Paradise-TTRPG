---
title: Druid
created: 2024-08-15T16:52:12-04:00
modified: 2025-08-04T21:56:35-04:00
flavor: The druid is similar to a druid in D&D or Pathfinder. Druids are able to cast a few spells at will, but most druid spells must be prepared in advance.
---
## Stats
- `+1 Intellect or Acuity`

*Class Hit Die*: `d8`

### Other Abilities
- Mana Limit: `Acuity Bonus + CB + Class Level` per chosen element
- Receptacle Limit: `Intellect Bonus + Acuity Bonus + CB`
- Surge Dice: `Strength Bonus + PB + #chosen elements`
- Spells Known: `&LeftCeiling;Class Level / 2&RightCeiling; + CB + Passive Intellect`
- Spell Levels Prepared: `Passive Intellect + Passive Acuity + Class Level * 2`
- Spell Casting: You can cast any natural spell you have mana for, or any arcane spell you have mana for if you know it.
- Elements: Choose 1 element at level 1. You have that element and Nature. At every 2 levels after, you may choose an additional element. Duplicate elements are counted separately for regen and abilities that key off of the number of elements chosen.
- Innate Spells: You have access to all spells of your chosen element of level below your `Acuity Bonus + &LeftFloor;#times element was chosen / 2 &RightFloor;` without those spells counting against your spells known limit.
- Spell Preparation: You may prepare a number of spells from your spells known list at specific levels, where the sum total of all spell levels prepared does not exceed your limit. Casting these spells exhausts the prepared spell and does not cost mana. Other requirements `coming soon`.
- Meta-Magic: You have access to any meta-magic option that uses your chosen elements.
- Mana Regeneration: Under normal circumstances, you regain 1 mana per chosen element at the start of each turn.
- Surge of the Wilds: You have 1 additional surge die per element chosen. When one of those dice is expended, you begin surging for that element for a number of rounds equal to the roll of that surge die.
	- While Surging:
	- Regain extra mana of that type equal to your `Acuity Bonus`
	- Your Acuity is increased by 1 step.
	- Any spell using that type has increased effect.
	- Your safe upcast for spells using that element is increased by 1
