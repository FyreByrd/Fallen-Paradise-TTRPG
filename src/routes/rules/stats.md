---
title: Character Stats
created: 2024-08-21T20:34:49-04:00
modified: 2025-08-04T16:08:51-04:00
---
All characters have six stats:
- **S**trength: A character's ability to deal physical damage and perform other feats of athleticism.
- **F**ortitude: A character's ability to take damage and recover from physical effects.
- **D**exterity: A character's ability to dodge and perform other acts requiring finer motor skills.
- **A**cuity: A character's capacity to observe their surroundings and utilize experience.
- **I**ntellect: A character's capacity to learn and remember.
- **W**ill: A character's capacity to direct magical forces and resist their more subtle effects.

The average score for a non-adventuring human in any given stat is `10`. The smallest a stat can be, through any means, is `4` and the largest is `40`. Whenever the score for a stat changes the player may choose which dice compose the stat. The maximum values of the dice used for the stat must add up to the stat score.

## Using Stats

Most checks involving character stats will usually use the results of rolling two different stats or the same stat twice. Bonuses or penalties that would be applied to the roll may not count more than once. For example a character whose **strength** stat is `1d10 + 1` will roll `2d10 + 1` for a **2_S_** check rather than `2d10 + 2`.

### Calculating Passive Values

In some circumstances an ability or check may not use a roll but may instead refer to the **passive** value of a stat. The **passive** value of a stat is calculated as `&LeftFloor;(stat score + #dice) / 2&RightFloor;` (this is equivalent to the expected value of a roll). Any applicable bonuses or penalties will increase or decrease the **passive** value accordingly. 

### Calculating Bonuses

In some circumstances an ability or check may not use a roll but may instead refer to the **bonus** of a stat, which includes all applicable bonuses and penalties as well as an additional bonus or penalty depending on the stat score. The bonus/penalty from the stat score is equal to the number of steps the score is above or below 10. For example, 10 is +0, 14 is +2, 8 is -1, and 28 is +9

## Character Creation and Leveling

By default, a level 1 character will have `1d8` in each stat and can choose to **decrease** the score of up to two stats to **increase** the size of up to two stats. Stat scores are increased or decreased in steps of 2, unless the score is being increased beyond 20, in which case it is steps of 4 (which counts as 2 steps for calculating the **bonus**)

## Surging

All characters have access to a limited pool of extra dice that represent a character's adrenaline. The size of the dice in the pool is not fixed but is instead determined by each individual that surge dice are used for. For any roll that surge dice are used in, a surge die is one size larger than the largest die that would otherwise be used for the roll. The number of surge dice available to character depends on the class, but is generally correlated to a character's strength stat.

Only one surge die can be **expended** on a given roll and surge dice are not replenished until a character **rests** unless otherwise stated. Surge dice can be voluntarily **expended** for any roll. Surge dice are automatically added (**cascaded**) to a roll (but not **expended**) whenever the roll is a critical success or a surge die used in a roll rolls its maximum value.

## Critical Success

A roll is considered a critical success when both:
1. The total of the roll exceeds `10`
2. The two highest valued dice in the roll share the same value.

**Note**: Surge dice are excluded from these calculations.

## Derived Stats
### Health

At level 1, your health is equal to `Ancestry hit die + Class hit die + 2 * Fortitude`. At each level thereafter, add `Ancestry hit die + Class hit die + 2 * Fortitude` to the previous total for your new health. If a character, such as a Berserker, would temporarily increase their `Fortitude`, their max health does not change (they will instead have additional temporary health). Yes, this could result in very big numbers. An optimized Level 20 Berserker could very easily have more than 1000 health. Don't worry though. A fireball upcast to unheard of levels would probably do that much damage 😉(and maybe level a city in the process). Keep in mind that in a perfectly average build, a Level 1 character would have about 20 health and a Level 20 character would have about 400.

### Movement Speed

Walking speed is currently calculated as `(Passive Dexterity + PB) * 2 meters` (the board is currently divided into squares of 2 meters each)
