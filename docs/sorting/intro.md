# Sorting in TypeScript

Given an array of `T` you are mostly best off using the built-in `sort` method (`O(n Log n)`). There are two warnings with this function: 

* You generally want to always provide a `compare` function **even for numbers** otherwise the default compare function is lexicographical (i.e. an alphabetical sort after doing a `toString` on each number which doesn't work well).
* This function mutates the array in place.

```ts
let xs = [5,4,3,-22,1];
xs.sort((a,b)=>a-b); // Ascending sort
console.log(xs); // [-22,1,3,4,5]
```
Of course for descending you can use `b-a` (or use `.reverse`)

