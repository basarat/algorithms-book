# Palindrome

An Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 

## Problem 1

Tell if a word is a palindrome

## Solution

You just need to check if the reverse of a string is the same as the string. 

```ts
function isPalindrome(str:string) {
  return str.split('').reverse().join('') === str;
}
```

Since `reverse` is not a function on a JavaScript string you just leverage the one on `Array`
