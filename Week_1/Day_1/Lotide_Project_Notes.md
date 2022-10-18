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

