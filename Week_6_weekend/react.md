# Going Into Week 7 (w6d5)

It's crazy how fast this is going that we're already halfway done. That midterm project was a real doozie but honestly a lot of fun. now we're getting into REACT. about the midterm project - I still like the idea of using that as a playground / portfolio piece. I'll use the readme-beyond branch to do my own work on it past this point, and i'll let the guys know they should fork / clone it so taht they could possibly do the same

## "switching to host machine"
- I've already been on my host machine this whole time, so not a big deal. Sounds like we will still be using postgres

checking versions at this time:
- node v15.14.0
- git version 2.37.1 (Apple Git-137.1)

command `nvm ls` lets you see your local versions of node (sounds like we might switch versions at some point). `nvm use` to switch between.

command `nvm ls-remote` shows ALL available versions of node

## What is react?
- "a javascript library for building user interfaces" - so, a library just like other libraries we've used and created
- uses Javascript XML (JSX) as language
- has a way of managing the  **state** of each **view** in our application
- *encapsulation*: deals with restricting direct access to data, hiding functions- "a group of elements can be stored inside a component / components can be called by other components

### React.createElement
structure: `React.createElement(type, [props], [...children])`

Using JSX to create an element:

``` jsx
const element = <h2 className="name">Name</h2>
```

is the same as writing in Javascript:

``` js
const element = React.createElement("h2", {
  className: "name"
}, "Name")
```

so JSX is definitely more simple. note from compass: "some properties do not map directly to HTML attributes," but react would provide useful warnings like `Warning: Invalid DOM property 'class'. Did you mean 'className'?` if we used `class` instead, for example.

seeing more examples of how JSX is far superior and easier to read. So i assume we'll be writing in it by default and I won't have to remember so much about the differences

setup a component as a function (expression definition) in jsx that creates a hierarchy of DOM nodes (looking like pretty regular HTML), and then can call the function with `const tweet = <Tweet />`. the uppercase T is crucial here, that case is how react checks if you're asking for a regular element or a component.

### ReactDOM.render
-  an additional library, looks like it is used to provide prpoerty values to previously declared components, and also selects an existing element to "pin" the component inside of? using in this example `dccument.getElementById()`. I'm attaching the whole example because it seems like it will be a good structure to reference. Per compass: "Most applications call `ReactDOM.render(element, container)` a single time to render the application."

``` jsx
import React from "react";
import ReactDOM from "react-dom";

function Tweet(props) {
  return (
    <article className="tweet">
      <header className="tweet__header">
        <img className="tweet__header-avatar" src={ props.avatar } />
        <h2 className="tweet__header-name">{ props.name }</h2>
      </header>
      <main className="tweet__content">
        <p>{ props.content }</p>
      </main>
      <footer className="tweet__footer">{ props.date }</footer>
    </article>
  );
}

ReactDOM.render(
  <Tweet
    name="React"
    avatar="https://api.adorable.io/avatars/64/react@adorable.png"
    content="A JavaScript library for building user interfaces"
    date="May 29th, 2013"
  />,
  document.getElementById("root")
)
```

looking at it again, actually the `<Tweet` call where values are provided is just the actual Tweet function, and those are the `props` it needs to run correctly. so that's independent of the reactDOM.render. So ReactDOM.render seems like a document.ready call, in a sense

it looks like you can use regular javascript functions in JSX as well, just need to put inisde of curly braces {}?

### JSX Rules
- JSX is more strict than HTML:
  1. All tags must be closed
  2. child tag must be closed before its parent (tree structure)
  3. All JSX expressions must result in ONE root level element
  4. No HTML comments

### summary
- JSX is not a template language, even though it functions like one.

** ** **SWITCHED TO NODE 16 VIA NV HERE** ** ** **BE AWARE** ** **
- all previous work may need to switch back to 15

## Create React App
- very cool - development framework / environment
- creating a new app with it creates a folder, sets a git commit, gives you gitignore and starter code. pretty cool
- commands to do things with it :
  - `npm start` runs dev server (default port 3000) - `ctrl+c`  to quit out?
  - `npm build` "builds the app into static files for production" / deployment
  - `npm test`  "starts the test runner" tests are pre-included
  - `npm eject` "removes the tool" - as in, your app will remain but create-react-app itself will be removed, and you can't go back from this. Don't do it ever, probably- i assume npm build gives you your standalone app anyway?

### things i see from what it generated

- app.js: looks like the css is applied with an import? that's pretty cool

notes from quiz:
- all code needs to go in `src/` folder. though i'm sure it can go into uther subdirectories if needed?
- you don't have to use create react app, you can just import the react library. the app is good for learning though
- JSX is NOT specific to react.
- 

so, now we're cutting apart the tweeter html and going to set it up in a react version. couple things:
- recall that when you have files chained together, you don't need to "require" or `import` anywhere exept for any files that are using the functions declared in other files. makes sense?
- instead of "module exports", we're now using `export default <>;`
- same with the other end, instead of require let's now use `import React from 'react'`
- any time you get a tag that would be self-closing, need to fix it by converting as so: `<br>` becomes `<br />`
- html event handlers are written in camelCase in JSX
- able to pass function reverence (no pares `()`), useful if function you want has multiple lines
- at this time the handlers we're going to use will mostly be `onClick`, `onChange`, and `onSubmit`.
- recall that `event` is an object that has a lot of information in it. when an event happens on an event handler, the event is passed to an invoked function:

``` jsx
<div onClick={(event) => {
        console.log(`The mouse coordinates of this click event are: x: ${event.screenX} and y: ${event.screenY}`);
        }}
      >
      </div>
```

- also recall that `event` usually gets shortened to `e`. maybe you can go with `ev` for the same reason that one dude gave about having to use cmd+f to find them.

some info provided in events:
  - onClick (button elements, etc):
    - mouse position
    -timestamp
  - onChange (input / textarea elements, etc):
    - name of the input
    - value that user typed / selected
  - onSubmit (form elements, etc):
    - content of the form
    - method to prevent defaut behaviour of form submission

# w6e - Saturday

## Reading Data Structures

We've talked about certain aspects of data structures - time to review and drill in

Variables can be seen as data structures - sometimes. As we know, `undefined, Boolean, Number, String, BigInt, Symbol` are known as **Data Types**. But, when we look at `Object, Array, Date, `and` Map`, these are **Structural Types**. they represent a structure that holds data and not the data itself. (also in JS, the last three are just sub-categories of the Object type). We need to be able to decide which structure is best for our needs for a given problem.

- Arrays are good for independent/unrelated items, but not as easy to modify
- Objects are good to store related data with labels, but not as good if information needs to be in a particular order

when setting up data structures, it's a good idea to define the structure first (like with an ERD) before starting to fill it out. Also with the above two points in mind, we can start to see how an array of ojects makes sense as "a collecton of independent items, each item has many properties", or what case you might want an object containing an array, or an object of objects, array of arrays, etc.

object containing objects as a data structure: coming back again to the concept of unique primary keys, pretty much

array of objects: the info we have on each object is pretty much static, and when we access the data we will usually want all of it or a filtered version as opposed to specific items? I see how these two examples are different, but i don't 100% see the reason why the 2nd makes more sense in an array.

What does click is storing the composition of elements in the array - unless we had percentages to go along with them, then they might need to be objectified

The key takeaway is to take things step by step! know your data, take a slice of it, decide how it should be structured, then see if your structure feels good when you start adding multiple data points.

## React Prop(ertie)s
- like function arguments, except the names are fixed in HTML
- finally going to actually start using the spread `...` operator! this deconstructs an object, so this example:

``` jsx
const user = {
  firstName: "Amy",
  lastName: "Mansel",
  avatar: "/profile-hex.png",
};

<Profile {...user} />;
```
is functionally the same as:
``` jsx
<Profile firstName="Amy" lastName="Mansel" avatar="/profile-hex.png" />

```

- "props are *automatically* stored in an object" - which means, when you are defining a component and have it accept (props), then you assign expected values to those props as you would an object: `const firstValue = props.firstValue` for example

- it is also common for a prop to be an entire function definition - remember not to call with (), just pass, without ()

- `props.children` - children is a pre-built-in key of props, "contains anything that is inside the tags of a component"
  - the example they give of this is a div tag, containing a style attribute with a bunch of styles. then inside the div, {props.children} is called. then when the actual component is called, its content also has the styles applied to it?
  - right, becase a compoent can only have one "parent element" or top level element, then it follows that props.children is anything inside that tag

  - event handlers passed between parents and children is a bit funky. might need to refer back to this example and practice with it

  - i think some of the react error/warning messages actually will show up in chrome dev tools rather than console.

  ## learning Array.reduce()
  - get a single value from an array... first examples i found used "accumulator" and "currentValue", but now i'm seeing one with "previous" and "current" so let's see where this goes.
  - current = CURRENT ITEM / ELEMENT BEING LOOPED OVER
  - previous = return? VALUE OF PREVIOUS FUNCTION CALL
  - the reduce callback runs once for every element of an array...

from what I understood, i was actually very close. here's what I had:

``` js
player.wins = matchData.reduce((accumulator, current) => {
      if (current.winner === player.gamerTag) {
        return accumulator + 1;
      }
    }, 0);
```
and here's what they were looking for:
```js
const currentWins = matchData.reduce((accumulator, match) => {
        // Adds a win if the gamerTag matches
        if (match.winner === player.gamerTag) {
          return accumulator += 1;
        } else {
          return accumulator;
        }
      }, 0);
```

so my return syntax was a little off, but other than that I pretty much had it! I definitely understand what reduce does, it's like another type of looping system.

side note, I thought we could just run the previous helper function inside this one, but they did something a bit different. Their solution makes sense too, using array.map to mutate the values of the elements inside - but, map creates a new array? confused. for ref, this is the whole of what i had. i wonder which is better performance. the for loop is probably rough.

``` js
export const addWinsToPlayers = (playerData, matchData) => {
  const players = preparePlayerData(playerData);

  for (const player of players) {
    player.wins = matchData.reduce((accumulator, current) => {
      if (current.winner === player.gamerTag) {
        return accumulator + 1;
      }
    }, 0);
  }
  return players;
}
```

## Conditional Rendering in jsx
- this is good. but you can't use if statements inside jsx
  - note: you cannot return an `if` statement. fair nuff
- you CAN use the ternary `? :` operator though - good thing to get used to
- you can also use `&&` to short circuit <- this is the "if true" statement we have access to

## iterating (looping) in jsx
- is your data in an array? use `.map`!
- object? same, it seems? or convert to array and then use it?

