# Insertion Sort

> Assuming western Left to Right reading card players of course

This is how humans naturally sort cards. Think about it, you go from left to right and step by step put each card in its *right place* (aka do an `insert`).

![insertion](./insertion.gif)

```ts
/**
 * Time complexity: O(N^2)
 */
function insertionSort<T>(
    array: T[],
    cmp: { (a: T, b: T): number } = (a: any, b: any) => a - b
): T[] {
    var current: T;
    var j: number;
    for (var i = 1; i < array.length; i += 1) {
        current = array[i];
        j = i - 1;
        while (j >= 0 && cmp(array[j], current) > 0) {
            array[j + 1] = array[j];
            j -= 1;
        }
        array[j + 1] = current;
    }
    return array;
}
```
