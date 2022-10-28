# DAY 7 - starting Asynchronous flow
- check `hello_timeout` for syntax examples

- typewriter exercise - I had to define a counter outside of the for loop - but I feel like if this were all wrapped inside a function, it would be fine? so i'm moving on.
- `\n` for new line
- `\r` for redraw line - will only redraw for # of characters that follow. Basically overwrites from beginning
- remembrer `NaN` is FALSY

## Event Handling / User Input
- can happen any time and must be handled asynchronously

- `process.stdout.write` === STANDARD OUTPUT! better than console.log?
- `process.stdin` - standard...input? what to do when there is any input from the user?
  - once CHARACTER at a time
  - `readline`  node module will read one line at a time
  - `on()` method to handle input is common
- rude, they got us stuck in a program. need an _interrupt signal_: `process.exit()`
- ``\u0003`` is a code for Ctrl + C ? crazy.
- not all events are user events. but it is a good intro

node readline example:
``` javascript
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
```
- async functions cannot `return` data.

## coming up: computer networking
- TCP = Transmission Control Protocol
- networking !== the internet

# Day 8 - snek game
- go step by step and experiment. try to go beyond instructions
- add detailed comments
- healthy balance of modular code
- refactor as we go.

##
- so: step 1,what we are doing is taking all the client code we did in lecture and putting it inside a function. we ARE using return here - but the return value incolves asynchrounous functions - so that's okay?
- SERVER HAS TIME-OUT IF YOU DON'T INPUT
- `.on` method - used off of the `net.createConnection({...})` object, which we have renamed into a function
  - need an __event handler__ to ... handle events
  - syntax `.on("`event name `", ` functionThatDoesSomething`);` <- this functioncan be anonymous:
    - `conn.on("`event name`", () => {});
- other possible events:
  - `close`
  - `connect`
  - `data` < this is probably a big one
  - `drain`
  - `end`
  - `error`
  - `lookup`
  - `ready`
  - `timeout`

## node module.exports - this is NODE specific syntax but should apply elsewhere.
- `module.exports` is an object.
  - so, you can add key-value pairs to it.
  - the file that `require()`s them will be able to reference exported keys specifically.
  - `require` RUNS all of the code in the **file** being imported. REQUIRE LOOKS AT A FILENAME and RETURNS MODULE.EXPORTS

- in the snake game client, we are declaring a variable that is our function. when we module.exports it, it is exported by varaible name. SO, if we want to go back to edit the coe INSIDE the object, we don't need to change this variable name - and anything that requires it will not be affected. Makes sense? this is probably best practice.

- can you still use bracket notation? why would you? when would you?
- OK - we already did all this. this is about ES6. already refactored in lotide index.
- what we didn't do is:
### de-structuring an object
- if you know the names of the keys on an object, you can unpack it like this:
``` javascript
//fileA.js
module.exports = {
  myNumber,
  myString,
  myFunction
}

//fileB.js
const { myNumber, myString, myFunction } = require("./fileA)
```
- ^^^ mynumber, myString, and myFunction are now EACH of them a const variable you can use in your code. but the names HAVE to match exactly when you do it this way.
- 


##
- ~" TCP guarantees the order in which inputs are processed "~


## CLI BREAKOUT SESH w/ Nally

- make a dictionary / glossary out of these notes.
- avoid github copilot
### CLI commands
- instead of clear, Ctrl+L - can do it while typing a line (ctrl in this case, NOT cmd)
  - typos? just type slower. better accuracy will come later
- cd ~ = root directory
- cd .. = parent dir
- . = same dir - example useful if copying file from elsewhere (cp /tmp/text.txt .)
- cd - = previous dir (NOT SAME AS PARENT) < useful for going back and forth quickly
- [TAB] autocompletion
- creating "aliases"
- history & up-arrow
- can PREFILL  before typing up/down and it will only show you commands that are starting with that (very useful with git or node)
 - not built in! can add!!!!
 - look for /.inputrc
- there ARE movement shortcuts!
   - ctrl+A - go to beginning of line (also works elsewhere)
   - ctrl+D - delete from the right
   - ctrl+E - go to end of line (also elsewhere)
   - ctrl+K - delete also from the right
   - question about moving directories that are git repos.


# Key bindings, up/down arrow searches through history
"\e[A": history-search-backward
"\e[B": history-search-forward
"\eOA": history-search-backward
"\eOB": history-search-forward

^ didn't seem to work for me, find it for zshell - ok it's working, remember need to close and reopen terminal if making changes to zshrc

alias gst="git status"
^^^ ALIAS!!!!!

# moving on to HTTP
some HTTP Methods / VERBS:
- GET - used to "get" data from the server

- POST - used to create new data
- PUT - editing existing data on server
- DELETE - delete existing data

### -

URL = Uniform Resource Locator:
![](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL/mdn-url-all.png)
- a connection established does not count as a request. that's just us getting their attention first before saying anything
- remember, we pretty much always need an "on connect" and "on data", first to send and then to receive and decide what to do with.
- HTTP is not an alternative to TCP, but it is a language used over it.

- could definitely return to page fetcher stretch.

