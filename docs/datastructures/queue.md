# Queue

A queue is a first in first out (FIFO) data structure.

## Implementation

Trivial, just use a JavaScript array `push`/`unshift` methods. Or if you want to encapsulate it in a class:

```ts
class Queue<T> {
  _store: T[] = [];
  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.unshift();
  }
}
```
