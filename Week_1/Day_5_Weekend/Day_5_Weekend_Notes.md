# Day 5

- QUIZ RESULTS:
  - arrow functions are not just simpley sntax. they "inherit parent scope" and do not declare their own. Interesting
  - adjusting the value of an array defined with `const` by using `=` doesn't work? should experiment. because i know it will adjust if you use .push etc

## Music Library Challenge
- continuing to work with arrays and objects. Good

- program will manage music playlists using both (obj and arr)
- DRY = Don't Repeat Yourself. can create extra functions if they help
- recall differences in dot vs bracket notation. and how to access objects/values within objects

- print playlists: should be able to use map for list length


## object methods and "this"

### functions as object properties (AKA methods)
- so far we've mostly been working with object properties that just reference literal data

- we can also save functions as values in objects - accessing them easily with dot notation:

``` javascript
const person = {
  firstName: "Cheever",
  lastName: "Esler",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Hello, " + person.fullName());
```

- function exists inside object, using `this` to SELF-REFERENCE

- same ability to add values to objects applies. as in, you could define the function outside of the function, still using this, then call it using the object name before the dot - then this would apply to the object. makes sense?
[reading](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method)

## Recursion
- i believe I've already implemented some recursive elements in music library - the playlistInfo and trackInfo are functions inside the library object, and there are OTHER functions inside the library obkect that call upon those two functions - so, functions calling other functions inside the same object. I wonder if it depends where they are in the object? doesn't seem to matter! I guess as long as the object is complied before .
- OK, I was wrong, this is not exactly recursion. Reursion is when a function calls ITSELF from within itself. so, similar to the principle behind `this` for objects - remember, functions ARE objects after all
- basic loop example - recursion lets us not use loops to get the result we want sometimes
- recursion is not always better, just different. Some languages don't have option of for/while loops

example: 
``` javascript
function countEvnToTwelve(number) {
  if (number <= 12) { // recursive case
    console.log(number);
    // function calls itself again and gets closer to base case
    countEvnToTwelve(number + 2);
  }
  // base case - (empty function when number > 12) could be a second if statement here that does NOT use recursion
}
```
- so, basically it's using the IF statement as the loop -  and in this example it's console logging but it returns undefined

- can more easily run into infinite loop issues like when using while
- error `RangeError: Maximum call stack size exceeded` is known as **stack overflow**
- from compass:
  - We refer to `number <= 12` as a **recursive case**, because as long as this is true, the function will continue to call itself
  - We refer to `number > 12` as a **base case**. If this is true, the function will not call itself
  - A function must have at least one recursive case and at least one base case in order to be recursive
-  Okay - so, actually, placement of the code really matters here, 

``` javascript
function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));
```
- this example,

  - as the function runs through recursion - UNTIL the value n = 1, it skips the if statement.

  - at the first step it returns 4 plus 3 - this is breaking my brain a little bit to try and explain. using pythontutor to visualize

- basically try to imagine the recursive call as the function - so it ekeps opening up new levels, each with a new return value that calls the function again, until it gets to 1 and exits the loop, and the return values "collapse upwards"

- example dealing with looping through an array that may contain other arrays - much simpler throiugh recursion, using a while loop involved some serious mental gymnastics

- end note from compass that seems like the most helpful pointer: "Being able to identify when **_the problem you are solving is just a smaller instance of the problem you have already solved_** will allow you to determine when to use recursion"

- recursion is a type of _control flow_

- will come up again when looking at Tree data structure

### some extra tools for dealing with arrays (see MDN):
- .shift(): can be used to pull out first element from an array and return its value.
  - same as pop() but pop does it for last in array, shift() does it to the element at 0 index
- unshift() adds one or more values as elements to the beginning of an array
- need to understand more about reduce()



#

## Modules
- finally addressing the copy/paste issue with functions between files

- every file in Node is a Module. which is a type of js object
- the module object contains metadata for the file, about location and more (id, exports, parent, filename, loaded, children, paths)
- looking at `exports: {}` - this is where things can be set to be exported and importable by other files. and, it's specific and accurate - looks like by default it is exporting an empty object `{}`.
- files can import other files using the `require` syntax (below). The file does not need the file type `.js` specified
``` javascript
const sayHelloTo = require("./myModule");
```
- files can specify parts that are exported:
``` javascript
module.exports = sayHelloTo;
```
- when you do this, the module value of `exports` becomes `[Function: sayHelloTo]`.
- when imported, it looks like it imports the module object for the other file?

## Packages and npm

- allows to install and use open source JS packages. we've done some of this already but not known what was going on in the background

- `Packages`, or packaged libraries, are "self-contained code libraries"
- we are going to end up using a command `npm install chalk@4.1.2`

## package.json (JSON = JavaScript Object Notation)
- constains metadata in object notation, like `module` but different
   - name, version, description, main, scripts, author, license, dependencies etc.
- `scripts` allows for commands to be run
- `dependencies` list other packages required for this package to work

- side note: you can you && in CLI? `mkdir .. && cd ..`? crazy

- `npm init` lets you set the initial json configuration in a folder
- when a package is installed after that, it will add details to package.json, import all dependencies, and add package-lock. best not to edit package-lock directly, let it get updated when other things are edited.

- side note: starting to wonder about best practice using single- or double-quotes for strings.

## chalk

- `chalk` seems to affect how text is displayed in the command line
- commands are chainable. so you can set multiple settings just dot after dot after dot
- assigning `require("chalk)` to a variable seems like the most covenient way to access it.
  - it looks like maybe this is an ES6 thing: can also assign it using `import chalk from 'chalk';`
- once chalk is in your library (is that proper terminology? basicallu once it's loaded in using `require`) then you can assign it to variables etc to make styles. like you could set and error style to be bold and red and use error instead of bold.red every time. Ya know?!?!?!

- stretch reading links in this lesson [semantic versioning writeup](https://semver.org/)

# AUTOMATED TESTING!

**extra side note: [this video](https://youtu.be/atkLUjvEpDQ) pointed something out that I trhink might help me with the new song / new playlist key issue from the music library. i want to try to get a key but i don't know what the key is going to be called, and it doesn't display until after it's generated. think about it**

- vs manual testing where you have to take a whole bunch of steps after changing code to confirm it's working - like console logging every change? becuase apparently some of what we've been doing so far IS automated testing, we just haven't formalized it

- reasons for automated testing:
  - saves testing time
  - saves debugging time
  - makes it easier to work on something piece by piece without having to keep it all in your head at once
  - makes it easier to come back to a project after a break, in case we forgot anything
  - makes it easier to work in a team
  - acts as documentation
  - improves overall quality of our code

- different types: unit, integration, and functional
- we're only really focused on unit testing this week. integration and functional are for more network/end webpage type stuff
- "happy path" testing sounds like - it is just watching for the most critical function-breaking issues that would make things not work correctly. it's not all-encompassing, but it's a start

- the unit test "magic button" for us will be `npm test`
- looks like there's been an `assert.equal` function this entire time! pretty sneaky

## Mocha and Chai

- BDD = Behaviour Driven Development - testing for behaviour of the code and also behaviour of end user
- `mocha` is a testing framework, `chai` is an assertion library
- when installing in a folder, we are using `npm install mocha@9.2.2 chai --save-dev`. the last save-dev part indicates that these packages will be saved in dev dependencies, not full dependencies the program needs to run with. Because, mocha and chai are ONLY being used for testing. the code wil not end up relying on them to function externally, if published
- common testing structure - one folder for the files, another folder for all testing
- especially when using mocha, "test" is the folder name you need - you main code folder can be named whatever else though
  - ALSO has to do with the `"./node_modules/mocha/bin/mocha"` line we added to `package.json` in the top level 
- quick reminder that when using expirt to export a function, you can define that function in the line as well. don't need to separately define as const
- for the example:
```javascript
const chai = require('chai'); // import chai library
const assert = chai.expect // setup a variable "bookmark" to be used in our tests
const validator = require("../javascript/groupValidator.js") // importing file - use same syntax as CLI for location
describe("The function groupValidator()", () => {
  // HERE is where we put our tests. "describe" is a mocha function
});
```
- once the testing gound is set up like this, we'll do all our testing in THIS test file - not as extra code in the actual file. we can now leave that file to BE WHAT IT IS and not be the file ALSO running its own tests. so much cleaner
- I'm very curious about the `() =>` part - emty bracket arrow function - need to think about what this is. look at prev arrow func examples
- when importing - the file we require is an object. any functions inside are then mothods of that object.
- once the test is set up, when we run `npm test` as long as we are witin any part of the dir we originally did the `npm init` inside of, it will know where to look for testing - so you can run npm test from any subdirectory
- also on init, when you do `npm init -y` it will essentially answer yes to all the questions, so you don't have to hit enter 20 times
- `npm test` will show us a clean looking test result output!
- can also choose to run one specific test file, if you have multiple - `npm test test/test_palindromes.js` for example. so name test directory and specify which test file to run
- unit testing, again, refers to breaking program down into its smallest testable units. think modular design

### some more string . JS commands
- .split() is a method you can call on a string, it will take one arg that defines a split point, then will return an array of all the substrings between matching split points. see MDN
- .reverse() will reverse an array, Mutating it - the original array will no longer be the same. (fine in this case because we don't need the array for anything else)
- .join() will turn an array into a string, it will take one arg to give it a split point - so, exact reverse of split. 
- this palindrome example now makes more sense.
###

- so with this palindrome problem, i still had to change my code and console.log steps, but I get it more now - we write the test for the ORIGINAL INPUT and we do not change the test to match the result, we ALWAYS adjust the base code to meet the test. 

- when we talk about testing edge cases, test only those values that are just on the edge of your parameters. i.e. if you're testing about an age limit and the age limit is 18, check 17 and 18 - don't check 15 unless you need to for some other reason.

- testing for both happy and sad path - so make tests that we expect to return true and ones we expect to be false

## Name Formatter
- now we are doing both, testing and programming. Remember that we want to use a test-first approach

- using `string.charAt(string.length - 1)` vs. `string.endsWith`

- made it so far, but last test wants us to throw error. so I'm not sure how to do that yet. Maybe it's in other stretch work

## PLAGIARISM - 
- don't do it.
- when pair programming or programming in groups, @mention github usernames in git commit messages.
- maybe have comments on code base indicating who did what.
- 


#

## tech interviews

- helps to prepare for REAL interviews

- notice point of assesment - what could you work on. but you should'nt really need extra prep for the interviews

- provide one-on-one mentor time

- don't be afraid to say "I don't know" and ask questions to the interviewer