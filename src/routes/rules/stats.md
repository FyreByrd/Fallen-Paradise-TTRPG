---
title: Character Stats
created: 2024-08-21T20:34:49-04:00
modified: 2025-01-19T22:22:47-05:00
---
All characters have six stats:
- **S**trength: A character's ability to deal physical damage and perform other feats of athleticism.
- **F**ortitude: A character's ability to take damage and recover from physical effects.
- **D**exterity: A character's ability to dodge and perform other acts requiring finer motor skills.
- **A**cuity: A character's capacity to observe their surroundings and utilize experience.
- **I**ntellect: A character's capacity to learn and remember.
- **W**ill: A character's capacity to direct magical forces and resist their more subtle effects.

The average value for a non-adventuring human in any given stat is `1d8`.
The smallest a stat can be, through any means, is `1d4` and the largest is `2d20`, although stats will range between `1d6` and `2d12` solely through normal level ups (The extended range is achievable by a raging [Berserker](/classes/berserker) or a [Monk](/classes/monk) who is more focused on physical power).
## Using Stats

Most checks involving character stats will usually use the results of rolling two different stats or the same stat twice. Bonuses or penalties that would be applied to the roll may not count more than once. For example a character whose **strength** stat is `1d10 + 1` will roll `2d10 + 1` for a **2_S_** check rather than `2d10 + 2`.

### Calculating Passive Values

In some circumstances an ability or check may not use a roll but may instead refer to the **passive** value of a stat. The **passive** value of a stat is calculated as the statistical expected value (`&LeftFloor;(min value + max value) / 2&RightFloor;`) of a single roll in the stat. Any applicable bonuses or penalties will increase or decrease the **passive** value accordingly. A table is provided below for convenience.

| *Size*       | *Passive* | *Size* | *Passive* | *Size*       | *Passive* |
| ------------ | --------- | ------ | --------- | ------------ | --------- |
|              |           | `1d4`  | 2         |              |           |
|              |           | `1d6`  | 3         |              |           |
|              |           | `1d8`  | 4         |              |           |
| `2d4`        | 5         | `1d10` | 5         |              |           |
| `1d4 + 1d6`  | 6         | `1d12` | 6         |              |           |
| `1d4 + 1d8`  | 7         | `2d6`  | 7         |              |           |
| `1d4 + 1d10` | 8         |        |           | `1d6 + 1d8`  | 8         |
| `1d4 + 1d12` | 9         | `2d8`  | 9         | `1d6 + 1d10` | 9         |
| `1d4+2d8`    | 11        | `2d10` | 11        | `1d8 + 1d12` | 11        |
| `1d4 + 1d20` | 13        | `2d12` | 13        | `3d8`        | 13        |
| `1d20`       | 10        | `2d20` | 21        | `3d12`       | 19        |

### Calculating Modifiers

In some circumstances an ability or check may not use a roll but may instead refer to the **modifier** (abbreviated as **mod**) of a stat. The **modifier** is calculated as the `&LeftCeiling;passive / 2&RightCeiling; - 2`. A table is provided below for convenience.

| *Size*       | *Mod* | *Size* | *Mod* | *Size*       | *Mod* |
| ------------ | ----- | ------ | ----- | ------------ | ----- |
|              |       | `1d4`  | -1    |              |       |
|              |       | `1d6`  | +0    |              |       |
|              |       | `1d8`  | +0    |              |       |
| `2d4`        | +1    | `1d10` | +1    |              |       |
| `1d4 + 1d6`  | +1    | `1d12` | +1    |              |       |
| `1d4 + 1d8`  | +2    | `2d6`  | +2    |              |       |
| `1d4 + 1d10` | +2    |        |       | `1d6 + 1d8`  | +2    |
| `1d4 + 1d12` | +3    | `2d8`  | +3    | `1d6 + 1d10` | +3    |
| `1d4+2d8`    | +4    | `2d10` | +4    | `1d8 + 1d12` | +4    |
| `1d4 + 1d20` | +5    | `2d12` | +5    | `3d8`        | +5    |
| `1d20`       | +3    | `2d20` | +8    | `3d12`       | +7    |

## Character Creation and Leveling

By default, a level 1 character will have `1d8` in each stat and can choose to **decrease** the size of up to two stats to **increase** the size of up to two stats.

![A flowchart showing the relations between the different sized dice](/dice-chart.svg)
### Decreasing a Stat

The size of a die is decreased in accordance with the above graph from right to left. A die cannot be downgraded below `1d6`; however, a `1d4` is reachable while under some effects, such as rage.
### Increasing a Stat

The size of a die is increased in accordance with the above graph from left to right. When upgrading the size of a die, the player chooses which path to take. A die cannot be upgraded above `2d12` except for certain stats by certain player classes. Rolls will only involve `1d100` or `2d100` if a **surge** takes place.
## Surging

All characters have access to a limited pool of extra dice that represent a character's adrenaline. The size of the dice in the pool is not fixed but is instead determined by each individual that surge dice are used for. For any roll that surge dice are used in, a surge die is one size larger than the largest die normally that would otherwise be used for the roll. The number of surge dice available to character depends on the class, but is generally correlated to a character's strength stat.

Only one surge die can be **expended** on a given roll and surge dice are not replenished until a character **rests** unless otherwise stated. Surge dice can be voluntarily **expended** for any roll that does not use **acuity** or **intellect**. Surge dice are automatically added to a roll (but not **expended**) whenever the roll is a critical success or a surge die used in a roll crits.

## Critical Success

A roll is considered a critical success when both:
1. The total of the roll exceeds `10`
2. The two highest dice valued dice in the roll share the same value.

**Note**: Surge dice are excluded from these calculations.
