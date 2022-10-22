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

