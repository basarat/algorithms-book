# General Tips

* [Avoid off by one errors](#avoid-off-by-one-errors)
* [Random Numbers](#random-numbers)

# Avoid off by one errors

Just solve with small numbers and the addition / subtraction gives you clue towards if you need to add / remove a `+1`. 

# Random Numbers

You can get random number in `O(1)` (for asymptomatic analysis). Operating systems generally have an entropy pool (using user input / cpu usage etc) that they provide to programs that need them (either natively or through the virtual machine of your language).
