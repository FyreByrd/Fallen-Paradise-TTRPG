---
title: Overview of the Magic System
created: 2024-12-15T17:41:35-05:00
modified: 2024-12-15T22:05:41-05:00
---
## The Elements

Fallen Paradise uses an elemental magic system. All magic is associated with at least one element and costs mana of the same type. For the purposes of the magic system, there are 10 elements:
1. **F**ire
2. **W**ater
3. **E**arth
4. **A**ir
5. **L**ight
6. **S**hadow
7. **N**ature
8. **I**ce
9. **D**ecay
10. **T**ime

## Mana Costs

Spells officially range from level 1 to level 9, although higher levels can be reached through upcasting. There are three types of spells, with different associated mana costs: 
1. Immediate: Take 1 or more actions to cast, but the effect lasts only for a short time after being cast.
2. Focus: Have a lingering effect with an associated ongoing cost.
	- Just because a spell could cause an ongoing effect does not mean it would fall under this category. If, for example, an immediate spell were to ignite an object, that object would stay on fire without any extra cost, as that is the natural behavior of fire. A fire spell of the focus type would involve a continual blast of flame or lighting something on fire and keeping it at a consistent strength (i.e. higher than would be normal for an ordinary fire of the same size).
3. Charge: The effect of this spell can be increased over the course of several rounds while the spell is held to charge without upcasting the spell before releasing the devastating effect. (Yes, you *could* charge a fireball for a whole minute, you just might be charged with war crimes later if you (or any witnesses for that matter) survive).

Spells of level 6 or higher take at least a full turn to cast, regardless of how many actions a player may have that turn.

The costs for the different types of spells can be calculated through simple formulae; however, for convenience, the costs are summarized in the below table.

| *Level*     | 1    | 2    | 3    | 4    | 5    | 6     | 7     | 8     | 9     | *Formulae*                                                             |
| ----------- | ---- | ---- | ---- | ---- | ---- | ----- | ----- | ----- | ----- | ---------------------------------------------------------------------- |
| *Immediate* | 1    | 2    | 5    | 8    | 11   | 14    | 18    | 22    | 27    | `&LeftFloor;n * &radic;n&RightFloor;`                                  |
| *Focus*     | 1, 1 | 2, 1 | 3, 1 | 5, 2 | 6, 2 | 7, 2  | 9, 3  | 10, 3 | 11, 3 | `&LeftFloor;4 * n / 3&RightFloor;`, `&LeftCeiling;n / 3&RightCeiling;` |
| *Charge*    | 1, 1 | 2, 2 | 4, 3 | 7, 4 | 9, 5 | 11, 6 | 14, 7 | 16, 8 | 19, 9 | `&LeftCeiling;(immediate cost + focus cost) / 2&RightCeiling;`, `n`    |
For Focus spells, the first number listed is the initial cost, and the second number is the per round cost to maintain the spell's effect.

For Charge spells, the first number listed is the initial cost, and the second number is the cost per action to increase the spell's effect. The initial cost is the average of the initial costs of an immediate and a focus spell of the same level.

## Upcasting

A caster can increase the level of a spell by expending mana equal to a higher level. Since the cost of a spell by level is easily calculated, a caster can even cast a spell beyond 9th level using this!

The maximum level of spell a caster can safely cast depends on both their level and whether their class is a full-caster or a half-caster. I have not yet determined how this should interact with multiclassing.
- Full-Casters: `minimum(9, &LeftCeiling;Class Level / 2&RightCeiling;)`
- Half-Casters: `1 + &LeftFloor;Class Level / 4&RightFloor;`

If a caster casts a spell above their safe limit, they will take `d20 * the level difference` damage.

## Mana Storage

Any caster can store mana on themselves, subject to class-specific limits. Most casters can only store one type of mana on themselves. Mana can also be stored in receptacles. The amount of mana that can be stored in a receptacle is equal to `(Passive Casting State + CB) * number of materials in the receptacle matching the mana type`.