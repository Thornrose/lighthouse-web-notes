# Lotide Project
## Libraries

- a collection of code that can be re-used in multiple projects, vs. having to write new code every time
- can be public or private
- jQuery and Bootstrap are some examples of public libraries
- Lotide project will be based on [Lodash](https://lodash.com/)
- _side note: stars on gitHub indicate popularity_


## Assert function

- `console.assert()` shows an error message in console - easy way to implelemt error checking? yep
- _side note: this is running in node - can have multiple terminal instances open - could keep node open in order to maintain a function that was created there._
- we can set up our own file that functions this way - ours is better becuase it will **also** give us a result if the assertion is correct, whereas console.assert() will output nothing in those cases


## Template literals / template strings

 - "fancier strings" - a better way to concatenate? Oh yeah, looks way better!

 example: 
 ``` javascript
 const name = "Alice";
 console.log(`Hello, ${name}!`); // logs Hello, Alice!
 ```

 - to reiterate, the syntax is `${...}`, using backticks `(``)` around the rest of the string.
 - referred to as *interpolated*

## Implementing head and tail

- head gets first [0] element of a given array
- for this assignment we copied the Assert function, but later will learn to call function from other files as well
- tail gets everything after [0]
- to check assertion, i had it half right - first confirm length is as expected, then _also_ check each individual element value.


# 
## Refactoring with new skills from week 1: day 6 testing cleanup
- so! now we are using `module.exports = ` to export the function, PASSING the function itself as a variable, not CALLING the function to action.
- note: can chain dependency. assertEqualArraysTest relies on assertArraysEqual, which relies on eqArrays - but don't need to import eqArrays to the testing
- specifics: Mocha gives us `describe` and `it`, Chai is an assertion library that gives us all the comparison functions
- written notes on `strictEqual` vs `deepEqual`

- if we want to export everything, we can make and index file that is an object requiring all other files.
- generally speaking, you can export anything you want with module.expots
- OK, now they tell us, es6 has something called _Propery Value Shorthand_ which makes things simpler if you ever need to assign a value by external reference variable to a key in an object:
``` javascript
const age = 33;

const person = {
  name: 'Pat',
  age
};
```
- not necessarily useful right now or not good to use too much, but wow it would make exporting a **lot** simpler
- "variable name becomes property name, and variable value becomes value of that property"
- however, remember that more detailed or seemingly redundant script (like our index) can sometimes be more self-documenting
