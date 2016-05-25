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
