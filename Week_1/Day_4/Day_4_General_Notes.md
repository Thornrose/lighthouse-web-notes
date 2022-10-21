# Day 4 - Callbacks w/ more Objects and Functions
## functions as objects
- functions can be passed as args in other functions (callback)
- considered [first class objects](https://en.wikipedia.org/wiki/First-class_citizen)
  - can be stored in variables and passed around
  - can have properties assigned, just like other objs
- look at this:
```javascript
myFn.someAttribute = 42;
console.log(myFn.someAttribute);
```
here, we're not logging `someAttribute`, we're logging `myFn.someAttribute`, which means this value has been assigned there

- callback functions: passed into a _receiver_ function that can use it as much as it needs to. it has _access_ to the callback

- when receiver function is defined, argument for callback will have different name than callback itself. this way, a receiver could recieve any given function, not just one.
- i like to think of this as passing "through" the callback goes INSIDE of the receiver. the param/arg is the door
- recap "a callback function is first defined, then passed as an argument to another function, and finally executed once a specific event occurs."

<span style="color:green"> side note, I feel like i don't have room in my brain for all the new stuff. I am UNDERSTANDING callbacks and how they can give/receive info so far, but I feel like i will forget some of the object info. This is why it's important to take good notes, take breaks, do reviews - I really do hope to get to some stretch work today, or this weekend even</span>.

- array `forEach()` method - takes elements of an array and does something with each of them. (Arrrow function? yes! though, there IS a way to do this witout arrow, need to use `function()`, i think i have more notes on it below
- refer to example of how forEach differs from for..of:
```javascript
names.forEach((name, i) => {
  if (name === "Waldo") {
    found(i);
  }
});
```
- so when you call forEach on an array, you can put three args in brackets (element, index of the element, and... array itself.
- then you use arrow function `=>` to point to what to do with forEach, inside `{}`. remember, still need to close with `);`
  - I think this is what being "inline" refers to?!

- recap: you can pass data into functions. you can pass functions to other functions. Our focus will be on passing functions to other functions. AKA Callbacks.

## Anonymous Functions
- functions do not necessarily need to be explicitly named. can be assumed or "anonymous"
- bascially just serving as a value passer / gatekeeper?
  - so, kindof - where the anonymous function is called inline, ~~i don't think that's the same as a callback. Callback so far IS a defined function, up at least one scope level, that is referred back to.~~  This IS still referred to as a callback, according to compass. I feel like it's still slightly differet? a call-on? a call-forward? either way. 
  - In the current anonymous function example, again where it is inline, it siply does not reserve memory for the function (does not define or save as variable `const myFunction = function()`). 
  - The inline, anonymous function exists purely for the purposes of the line in which it is being called?
- in terms of it gatekeeping/value passing, the thing the function does will need to be given at the same time. Syntax as follows:
```javascript
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});
```

note that in this example (and i imagine holding true for all others), `function(index)` is itself an argument, getting passed to the function `findWaldo`, which in ITS definition required two parameters `(names, found)`. so that is why it's a callback. it's calling back to the implementation of the function, but being passed inline in the execution of the function. BWAH

- also a big thought: about parameter vs argument: I am liking thinking of these as pais as well, parameter being the name given when a function is defined, and argument as the value / variable passed to it when the function is called. so parameter : argument pairs. like in the above example, `found` is the parameter and `function(index)` is the argument.

## Arrow functions
- Okay, glad we're not just assuming that this is a thing now. Assignemt on it. Break to walk now though
- arrow functions are a way especially for anon inline functions to make the code cleaner. you no longer need to write `function`:
```javascript
[1,2,3].forEach((num) => {
  console.log("num: ", num);
});
```
^ will print each element of array as expected by `.forEach`

- you CAN also do it all on one line without `{}` if code is short (it's specific for single-line code):
```javascript 
[1,2,3].forEach(num => console.log("num: ", num));
```
- (from map assignment) ALSO if you have a code on one line like this that needs a `return`in it, you can take return OUT, and the value you wanted to return will be IMPLICIT. even shorter. great example in [this video](https://youtu.be/bCqtb-Z5YGQ)

- arrow functions `=>` and `this` do not mix, apparently. (did we do much `this` work yesterday? yes - i have handwritten notes) 
    - will not need to use `this` much today but WILL come into play later with more OOP. stretch reading to come

## Lecture with Vasily Klimkin
- clarifying ideal workflow for bootcamp - ish... but I like the way i'm coming at it now.
- looking at `map`, `forEach`, `Filter`
- link to pythontutor (bookmarked)

## Filtering with Callbacks
- this is gonna get juicy

- there is a `.filter` method that can read elements of (an array? likely object too?) and give true/false value
- this basically completely bypasses the need for a for loop & if statement. does it all
- PassingGradesOnly has a good, simple example. think about what variables you are creating, where they are being read, what is happening?
- if you want extra practice, try writing it out again as a for..of loop.. see how much more effort it takes
- from MDN:
    
    - "filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true. Array elements which do not pass the callbackFn test are skipped, and are not included in the new array."

- so filter always wants a true/false return and will build an array of `true` results, while:
- `.reject` will do the opposite - will build an array of `false` results!
- basically use either one depending on if we are looking FOR something or if we are trying to get RID of something

## "Higher Order Functions"
 - **functions that take in callbacks are referred to as _Higher Order Functions_**

 - they _operate_ on other functions (rely on?)
- `forEach`, `filter` are higher order
- part of FUNCTIONAL PROGRAMMING, being able to use and pass functions as values

## using MAP
- side note: made file in wrong directory and moved it with finder. next time this happens try using `mv` in terminal

- ok, had to copy this one in. look at this shit:
``` javascript
const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const lighthouseNameLength = lighthouses.map(lighthouse => lighthouse.length);

console.log(lighthouseNameLength);
```
- JUST LOOK HOW CLEAN
  - to break it down: we have the array of lighthouses
  - still are creating a final variable, but then running .map on the array
  - we use arrow function instead of writing "function"
  - we name the parameter as "lighthouse" to know what we're looking for, which is each element of the array. but we could just as easily name it x
  - then we IMPLICITLY return the .length value, because we're still on the same line.
  - bruh.

  