## w4d5

so i just realized that my days are out of order as far as my notes go. should have started ad d16 this week. woops

anyway, let's get on to FRIDAY BAYBEE

## Intro to algorithms
- an algorithm at its core is simply a set of instructions or steps for accomplising a specific task.
  - THE STEPS!

- linear algorithms are typically slower
- logarithmic are much faster - note "logarithms are the inverse of expnentials"
- concept of `n` for given number / infinity
-

- speed through time measurement gets too hairy when we take into account different hardware/software/language combinations. 
- we prefer to measure speed by counting the **number of elementary operations**. elementary operations are simple and take a _constant_ amount of time to run
- doesn't matter if there are fewer variables than operations - variables don't matter here
- here are 3 elementary operations:
  - `let number = 0;`
  - `number += 2;`
  - `console.log(number);`

for `n` elementary operations, "running time" = `n`. >>>> `n` is also going to be used to represent the length of an array here:

- so for a for loop with a few extra elements, looping over an array, the result we find follows a format of `4n + 4` or something that looks like that.
  - point being, you need to account for every elementary operation Every tiem it happens - which, in a loop, can be many times

- QUIZ NOTE: i actually had it right. i didn't notice that "none of the above" was an option

## Linear vs Logarithmic
- **Binary Search** is a logarithmic algorithm where the search field is cut in half at every step
- basic explanation:
  - Let min = 1 and max =  n.
  - Guess the average of max and min, rounded down so that it is an integer.
  - If you guessed the number, stop. You found it!
  - If the guess was too low, set min to be one larger than the guess.
  - If the guess was too high, set max to be one smaller than the guess.
  - Go back to step two.

- again in pseudocode with one extra, very important step:
    - Let min = 0 and max = n-1.
    - `If max < min, then stop: target is not present in array. Return -1.`
    - Compute guess as the average of max and min, rounded down (so that it is an integer).
    - If array[guess] equals target, then stop. You found it! Return guess.
    - If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
    - Otherwise, the guess was too high. Set max = guess - 1.
    - Go back to step 2.

describing the structure of a logarithmic function would go something like "the number of times we can repeatedly halve, starting at n, until we get the value 1, plus one. but it's better weritten as `log2n` (base-2 logarithm of n).
- if `log2n = x`, then `n = 2 to the power of x`

- so if we're calculating "runtime", we use n to figure it out - get n, solve for x, add 1 (for the maximim last guess).
- i understand the principle but i might be hard pressed to explain calculating runtime.

## Search Analysis
- scratchpad example - while binary ssearch may take more lines of code, its runtime will most likely be less - 
  - for smaller datasets (sunch as the example) binary MAY end up with longer runtime. However for larger datasets it gets way cheaper
- takeaway: "When the number of items in the array is doubled, the running time of linear search will also double, while the running time of binary search will only be incremented by 1."

## Quadratic time
- the example here is a list of numbers, and we need to add two of them together to get a specific result
- QUADRATIC equation for most number of searches is (n^2 + n) / 2. `time complexity` will be exponentially more as `n` grows
  - this is essentially a byproduct of nested for-loops
- with LINEAR search, the number of searches turns out to be just `n`

linear and quadratic are defining the graphs that result from the algorithm - in this case, the binary-seeming method is actually linear. It's not about the pattern in the function (except also it is, because i mean, just look at the pattern)

## Big O Notation
-  written as `O()` - describes how number of steps scales, as we have been looking at above so far. does it scale linearly, exponentially, or logarithmically?
- three main things to consider:
  - we only care about "arbitrarily large" input - 1mil+ items let's say
  - drop non-dominant terms - i.e. when we have a situation with (n^2+n)/2 (quadratic), the n^2 is the biggest factor, so we don't worry about anything else
    - "**in Big O notation, 1000n + n^2 is written as `O(n^2)`**. In case you are wondering, we typically read this aloud as "O n squared".
    - Big O is only interested in the **highest order term**.
  - drop constant terms - same principle as above, if we have (n^3)/2 or (n^3)*2, both look similar without last operation, so we again focus in on n^2 (get rid of constant 2)

  Common Examples:
  - `Constant / O(1)` - direct access to a value
  - `Linear / O(n)`
  - `Quadratic / O(n^2)` - exponential
  - `Logarithmic / O(log n)` - binary