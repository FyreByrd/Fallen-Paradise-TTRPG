---
title: Levels and Multiclassing
created: 2024-12-15T15:05:54-05:00
modified: 2024-12-15T15:22:17-05:00
---
A player character starts at level 1 and can level up all the way to level 20 (for now).
A player character must have at least 1 class, and can have as many classes as they feel capable of keeping track of, provided other class-specific restrictions are met.
For each class a character has, the character has a different level in each class, the sum of which is equal to their character level. A character can only level up one of their classes at a time when leveling up their character.

## Proficiency Bonuses

As 20 is a rather large number to be applying as a bonus to a roll, even at high levels, a character's proficiency bonus is scaled based on their level, similar to in D&D.
A character further has two different kinds of proficiency bonuses:
1. Level Bonus, `LB`, which scales according to the character level
2. Class Bonus, `CB`, which scales to the character's level in a class, for each class.

In either case, the formula for calculating the bonus is the same: `&LeftCeiling;level / 4&RightCeiling; + 1`. A table is provided below for convenience.

| *Level* | *Bonus* | *Level* | *Bonus* |
| ------- | ------- | ------- | ------- |
| 1-4     | +2      | 13-16   | +5      |
| 5-8     | +3      | 17-20   | +6      |
| 9-12    | +4      |         |         |
