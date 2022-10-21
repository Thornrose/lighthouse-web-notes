# Day 3
## Objects
- reminder: object is a collection of key-value pairs
```javascript
const myObject = {
  key: "value",
  anotherKey: "another value"
};
```
- ^ "object literal" syntax - (A source code representing a fixed value is called ‘literal’)

- othey types of key-vaule collections: Ruby = Hash type, Python = dictionaries, Jva = Hashtable & HashMap
- JS is object oriented, meaning a lot of what it does is "derived from `Object`".
- note: using `typeof` on an array will return object! array is technically not its own data type!

## Lecture with Pedro Gonzalez

- don't try to follow / replicate code exactly.
- [git link for notes / demo](https://github.com/pedroagont/webft-17oct/tree/master/w01d3)


## ~

- git note : i like the idea of: add and commit / set messages on files separately when making large changes. the git add . for any other files that may have received small changes. then push all in one push

## re: Primitive Data Types
- undefined
- null
- boolean
- string
- number
- symbol (Introduced in ES6 and not something we need to focus on right now)

These six primitive types, plus object (which are NOT primitive), make up the seven fundamental types of JavaScript

## objects 
- all go into their own folders in objects dir (no nested repos)

- object keys are unique - one object cannot have two keys of same name
- "object literal" is an object with specifically only one key-vaule pair? or no pairs? are all objects technically literals? not sure
- recommended to use only quare brackets for the time being when referring to object properties. Not the worst way to practice
- not a great idea to leave key values as undefined - because if you check for a key that doesn't exist, it will also return undefined, so some possiblity for confusion there
- can assign new key value pais when outside of the object:
```javascript
const mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"]  = 22;
mary // shows the resulting object with both properties
```
- can have _nested_ functions/arrays within objects, objects within objects (remember fns and arrays are already technically objects)

- keys "are always strings" - for best practices, use camelCase as well here. Key naming that includes spaces or hypens or periods would require `""` which we may as well avoid. CAN use underlines. also remember about quotation marks / assigning to pre-existong / global variables:
```javascript
const spam = "spam";
person["dislikes"] = { food: spam, "e-mail": "spam" };
```
- `Object.keys(...)` will return an array of the keys in a given object (this feels like leading back to for..in)

- also useful: `Object.values()` and `Object.entries()`

## object iteration (for..in)
- objects will not behave correctly if you try to use a regular for or for..of loop on them

- for..in will IGNORE properties keyed by symbols

- careful to be aware: "objects can sometimes have properties that they inherit from their prototype chain as well as method names." so may need to filter results in certain cases. `.hasOwnProperty` method
  - from MDN: " returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it)."

  - using `this` - you CAN also use the name of the object, but `this` is preferable in case you need to change the name of the object (don't need to switch every "this" usage)
  - more `this` notes are HAND WRITTEN, check

- using variable declaration on nested objects like a "bookmark" . A good example from Julian Atanassian


- side note - you CAN you for..of to loop though a string, getting the values rather than string index



- util library? i'm starting to lose focus now... but, `inspect` function - part of node library? not sure

# check back to stretch reading on primitive data types & objects