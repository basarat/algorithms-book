# Reverse a string
JavaScript `string` doesn't have a `reverse` method. But you can just use the `Array.prototype.reverse` method.

```ts
function reverse(str:string) {
  return str.split('').reverse().join('');
}
```
