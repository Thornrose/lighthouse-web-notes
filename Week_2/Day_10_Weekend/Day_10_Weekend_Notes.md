# Weekend2

## The OO in OOP
- meant to help with planning modularity, reduce duplication. i like the sound of that
- an object altogether is sometimes called `state`. functions in objects are called methods, as we have learned
- can describe `behaviour` of an object can be described through its methods
- new looking example:
```javascript
const dog = {
  sound: "woof",
  breed: "shih tzu",
  speak: function() {
    console.log(this.sound); // COULD also write in here as dog.sound!
  },
  teachMeSomething: function() {
    if (dog === this) { /// look here!
      console.log("dog === this");
    }
    this.speak(); /// COULD also write in here as dog.speak!
  }
};

dog.teachMeSomething();
```
 - `this` is a KEYWORD, like `for` or `function`. 
  - it has specific use(s), mainly to refer to the object it is in, when used inside a method
  - `this` is the SAME AS the object name/identifier. So, it's not that you HAVE to use `this`. it's that you CAN use `this`.
  - THAT MEANS that you can self reference an object even if that object is anonymous, or if you don't know the name of the object.
- also really doesn't matter what order properties are defined in an object. it's all put together 
- remember that property values can still be changed just like regular variables if reassigned outside the object
- you can do a lot more than just use variable in between `${}` if you want
- from compass "Creating functions that are more independent and more portable reduces the risk of functions accidentally modifying something you didn't mean to."

## Disclaimer: confusion ahead - Classes
- Classes are most popular OO ... thing - "simpler approach". Learning classes will make learning other langs a little eaasier
- JS object system is based on *prototypes*, not classes per se. Classes are a new feature. Older JS would only be using prototypes
- js only mims behavious of class-based (*Classical*) OOP.
- we are going to act ignorant of prototypes for now.

### Classes are blueprints (templates?)
- naming convention: classes should always be nouns, first letter capitalized
- to create new object from class, use `new`

  - starting to understand x = new Date();
``` javascript
class Pizza {
  // ...
}

let pizza1 = new Pizza();
let pizza2 = new Pizza();
```

- in example above, `pizza1` and `pizza2` are __instances__ of the `Pizza` class.
- remember even if they are identical, pizza1 !== pizza2. separate objects. blueprint/house metaphor

### Methods and Properties (of classes)
- syntax for adding method to class is basically to outline a function, but we don't name it anything ahead of time, we don't use `function` keyword.
- to add properties, need to use `this` keyword
- _what is constructor?_ ah, yes:
- constructors are special methods that run whenever an object instance is created from a class. good way to setup default state for new instances.
- A CLASS MAY ONLY HAVE ONE CONSTRUCTOR.
- console.log(`${this}`) doesn't really work. spits out [object Obejct]
- constructor can be set with parameters to take arguments. The parameters can set default values in case none are passed at instance creation. values can still be changed after the fact.
- compared to todo-list exercise - i can understand how classes in JS are not really true classes but are another syntactical way of approaching object creation and management.

### primitives as objects - there is a stretch reading from W1D3
- can run into issues:
``` javascript
typeof(true); // = "boolean"
typeof(Boolean(true)); // = "boolean" (Boolean = class! first letter capital)
typeof(new Boolean(true)); // = "object" - ahh, yes...
```
### Inheritance
- some classes (mentor / student example) may have similar properties or methods - if this happens we still want to practice DRY coding, so:

- __Inheritance__ is a way to handle this - can buld a class based on an existing class
- so for the mentor/student example, we create a base class of what these two have in common - both a Person - go to the base level!
- looks like top level class is still the only one that can use `constructor`
- proper terminology: SUPERCLASS and SUBCLASSES
- using `extends` keyword

### Super
- `super` keyword involved in __method overriding__

- sometimes you want your subclasses to be Slightly different, but not different enough that you'd give them their own superclass
- you CAN override the method by redefining it in the subclass definition. But, that's still the long way. (BTW this is just called `method overriding`)
  - btw also the new method that overrides the old one will always be called now. think of it like if you used `let` on a function and then rewrote the function
- Here it is, folks: `super` acts like `this`, but for the parent / superclass. so you can call a method from the parent within the child.
- note: you can make sub-sub-classes...... yeah


### Getter & Setter
- allows to write more "idiomatic"

- special methods to use instead of accessing a value directly... why? Good for:
  - Validating data before assigning it to a property
  - Computing a value on the fly instead of pulling it out of a property (?)
- ~~i think these are like callbacks - they aren't really things, they are just ways of using the tools we have, and this is what we call them~~
  - wrong: see further down
- set: using a method to restrict options / make sure value that is assigned fits certain limitations (setSize example)
  - but, can't you still assign the value directly afterwards? there must be a failsafe for that...
  - I guess the idea is like. If you had control of the code. Why would you do that. Just make it so the user can only ever set the size using setSize
- get: can be setup to make calculations based on properties that may have changed, instead of having to do those calculations later on. (getPrice example)
### get & set
- so these aren't just concepts - JS classes have special `get` and `set` keywords that create what I'm calling "executive functions" - they act different

- important note: especially with set - need to store the value in a variable with a different name, otherwise you get infinite looping (accidental recursion)
  - this is also a semi-sneaky way of keeping the value secure from other influence. you CAN still directly change THAT value though...
- with `get` and `set`, when declaring the methods, you declare as methods - but when outside accessing, you access as properties/values. SEE example code in scratchpad. if you try to call the "method" as a method, you'll get: `not a function`. that's f**ed

- from compass: "Although not _needed_, often times it's nice to create an interface to a class's properties like this, where a method appears as a value. It creates a more simple interface that you or other developers are exposed to. Not all getter and setter methods have to be defined this way, though, and it really depends on our needs."

## LightCoin assignment
- __Dependency Injection__ - from compass "passing an object the things it needs rather than having the object access them itself" - meaning, more modular.

- side note, I do kindof love the way they're doing this to us. We learned a whole other kind of moudlarity before jumping into OOP. we learned it a much harder way. and now the concepts which we tried SO HARD to wrap our heads around, is coming back and now much easier to digest. IF we did it the opposite way, I feel like the jump in logic would still be pretty big. NOW, when we come back to those ideas later, the seed will be planted and fertile soil will be spread. let's go

- don't misunderstand `super`. anything that is defined in the parent class **IS** A PROPERTY/METHOD OF SUBCLASS. if it's only defined in the super, you still just use `this` to access it. super is only good for changing the definitions. if that makes sense

- also, methods defined in parent class can rely on values returned by subclass and vice versa. It makes sense. but it's a bit crunchy. check example (crypto)
- also REMEMBER METHODS STILL NEED `()`
- question about getting balance in this exercise. I feel like i used such a basic tool to get this. IS there a better way?
- stopped after missing feature 1. made note to go back 
- clever way to check if something is already in array:
``` javascript
if (this.toppings.indexOf(topping) > -1) {
      // Topping already exists, deny!
      return false;

```
- OKAY: in some languages, properties can be made private. which would get around the issue i was thinking about earlier
  - adding an underscore `_` to the beginning of a property is a common way of letting other developers know they shouldn't access a value directly
  in javascript though, yeah, it's just a gentlecoder's courtesy. no actual way of making something private
##### OOP best practices reading has a lot of good points in it that are applicable to a work enviroment
Single Responsibility Principle.

Private vs Public

Abstraction

Inheritance



# Weekend work
- going back to "creating promises" might not be a  bad idea. w2d4

## Prep for Web Servers - 
dig

could honestly go over some of those readings again

- so yesterday was a bit ... rough? for understanding, or at least retention. Remember articels on best practices. Start trying to implement 


## HTTP Server
- res = response, req = request
- sea shanty is a reference doc