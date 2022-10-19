# Code Review with Ahana: Dice Roller

Lots of takeaways from this review.

### understanding Math.random():
on the MDN page for [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), there's a helper function provided that helps with getting a random integer between two values:

``` javascript
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
```
at first I thought that some of the `min`s/`max`es were placeholders, but no, _this is verbatim_. so what I had done is renamed `getRandomInt` but set values for `min, max` in the next function - this one is a general dice roll, so someone could forseeable use this to roll any sided die, not just 6.

honestly just check the gist [revisions](https://gist.github.com/Thornrose/f5c9901b1b133b42f8d2f3cfb0a318de/revisions), it shows what i took out after help from Ahana.

- instead of defining empty string rollList and assigning value later, I was able to move those into one line.

- super important: an empty array can be declared as const but still added to. remember that arrays are _not primitive data types_.

- i was advised to set up `const args = process.argv[2]` on its own line so that i can use `args` as an input, but not the _only_ possible input.