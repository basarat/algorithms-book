# General Tips

* [Avoid off by one errors](#avoid-off-by-one-errors)
* [Random Numbers](#random-numbers)

# Avoid off by one errors

Just solve with small numbers and the addition / subtraction gives you clue towards if you need to add / remove a `+1`. 

# Random Numbers

You can get random number in `O(1)` (for asymptomatic analysis). Operating systems generally have an entropy pool (using user input / cpu usage etc) that they provide to programs that need them (either natively or through the virtual machine of your language).

JavaScript `Math.random` provides you with a random floating point number between `range [0, 1)`. To get an integer just use the following function: 

```ts
function getRandom(floor:number, ceiling:number) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
```
`+ floor` ensures its at least floor and then we just generate a random number between `[ 0 -- (ceiling - floor + 1) )`. 

> Math.random is *pseudo-random* but good enough for most cases. For true randomness and security critical applications you need something like NodeJS `crypto`. 
