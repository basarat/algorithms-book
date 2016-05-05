# Fizzbuzz

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

## Solution
You need to loop *right* `1-100` and do a check on both `three` and `five`

```ts
for (let i = 1; i <= 100; i++) {
  const t = i % 3 == 0, f = i % 5 == 0;
  console.log(
    t && f ? "FizzBuzz"
    : t ? "Fizz"
    : f ? "Buzz"
    : i
  );
}
```
