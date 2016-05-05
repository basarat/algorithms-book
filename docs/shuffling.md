# Shuffling

Shuffling is a procedure used to randomize an array. 

> The key property is that each item should have an equal probability to end up in any index.

## Solution 

The recommended (simple) algorithm is the `Fisher–Yates shuffle`. Its time complexity is `O(n)`. It can even be done *inplace*. 

You go from `0 - (n-1)` and at each index `i` pick a random number (remember random number generation is `O(1)`) between `0` - `n-i` and move the element at the result into the `i`th location in the array. 

It maintains that key property as: 

```
Probablility any item makes it to the first position
= 1/n

Probablility any item makes it into the second position 
=  didn't make it into the first * makes it into the second
=  (n-1)/(n) * 1/(n-1) = 1/n   

... so on
```
