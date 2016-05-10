# Stack
A stack is a first in first out (FIFO) data structure.

## Implementation 
Trivial, you just use JavaScript array `push`/`pop`. Or if you want to encapsulate it in a class:

```ts
class Stack<T> {
  _store:T[] = [];
  push(val:T) {
    this._store.push(val);
  }
  pop():T {
    return this._store.pop();
  }
}
```
