# Shuffling

Shuffling is a procedure used to randomize an array. 

> The key property is that each item should have an equal probability to end up in any index.

## Solution 

The recommended (simple) algorithm is the `Fisher–Yates shuffle`. Its time complexity is `O(n)`. It can even be done *inplace*. 

You go from `0 - (n-1)` and at each index `i` pick a random number between `0` - `n-i` and move the element at the result into the `i + thisRandomNumber`th location in the array. 

### Maintains Key Property
It maintains that key property as: 

```
Probablility any item makes it to the first position
= 1/n

Probablility any item makes it into the second position 
=  didn't make it into the first * makes it into the second
=  (n-1)/(n) * 1/(n-1) = 1/n   

... so on
```
### Has complexity `O(n)`
Remember random number generation / assiging an item to an array is `O(1)`, so its just `n` iteration of `O(1)` 

### Code 

```ts
function shuffleInPlace<T>(array: T[]): T[] {
  // if it's 1 or 0 items, just return
  if (array.length <= 1) return array;

  // For each index in array
  for (let i = 0; i < array.length; i++) {

    // choose a random not-yet-placed item to place there
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed
    const randomChoiceIndex = getRandom(i, array.length - 1);

    // place our random choice in the spot by swapping
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
  }

  return array;
}
```
