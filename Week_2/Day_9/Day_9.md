## DAY 9 (give or take)

## Promises
 - Promises help manage asychronous operations and callbacks
 - three states: Pending, then either rejected or fulfilled
  - pending - async operation is ongoing
  - rejected - async op has failed and we get error
  - fulfilled - async op copmleted successfully
- uses .then and .catch to handle the two possible outcomes, then also can use .finally (for something to do after)
- basically - when you call an async function, you get a result (rejected or fulfilled)
  - then you can pass the reult into another function as an argument
  - watch vids again if they don't do another walkthrough

 ### Callbacks review
 - chaining callbacks - passing callbacks through async functions
 - callbacks are for reusability and modularity
  - good vid by francis on callbacks.
- also going to need to start thinking more about error handling with try-catch blocks
- testing !== error handling


I honestly feel like I still need more practice with callbacks, mostly with syntax. Part of me is like... i'm staring to "see the matrix"? like I'm able to implement the code to work correctly, but I'd be hard pressed to try and put it into words. describing () => {} as a function with no parameters.

## JSON
- JSON.parse() - parse a sting AS json
- JSON.stringify() - return a json string corresponding to the specified value - can be used to replacwe key values
- Seialization & Deserialization
- so you type an object inside a string and then .parse(it) to turn it into an object
  - alternatively i imagine you can pull from a json file this way?
  - if you edit / remove a value from the object then .stringify(it) to turn it back into a string
  delete is a full-on command? only in node? hmm
  - need to put key names in quotes as well... so here's where you will NEED to use a combination of " and ' or `. But this makes sense looking at a json file, all the key/prop names are in quotes
- MEDIA TYPE - for JSON is `application/json`. for HTML, it is `text/html`
- thinkning about how parse and stringify work, and apply to how npm adds package.json from the web - npm is parsing a string and passing it into these json objects.
- JSON is meant to be language independent, meaning it can be used with other langs, not just JS.


hoo boy. lesgo

## API 
- Application Programming Interface
  - allows systems to work together - it's the window through which apps allow data to pass in and out, making the web what is is today (data everywhere)
- REST api = REpresentational State Transfer 
  - call from client to server, get data respone back
- APIgee test site?
- programableweb.com
- POSTMAN - REST Client
- OAUTH 2 for authentication - access tokens
- POSIX standards for compatability between different OS
- IOT / internet of things. everything basically has an api now

#### Remember HTTP GET and POST

## cats app
- remember to use `?key=value` format for manual parameters in url
- ALSO can use `?q=` for QUERY

- oh this was rough. I did not know how to implement callback, I think just due to tiredness / frustration

## MORE MOCHA CHAI
- now using `npx mocha` to run test suite
- trying to understand test setup - is done() like a return satement, because if either of the assert equal are false, it will return from that?
  - but if it runs through both and gets to the bottom, done is true?
- done is used to test async.


## ISS project
- fetch our ip address, fetch coordinates four our IP, fetch next ISS flyovers for our geo coordinates
- - realizing something about `null`... is it like... the value was never there to begin with? if we expect a param of a callback to be null - does the callback function act as if it only wanted the one other param? hmm
- - also a thought on planning. if we are setting something up to take a callback as an arg, then... we kinda need to know what that callback is going to be, don't we? I feel like the tricky part of pseudocoding or planning right now is we don't even know what to plan for.
- using `curl` on stuff? whazzat
- remember that `200` as an http code is the "all good" - o if it's !that, then... error?

### back for more with promises
- so thursday didn't go so well with the above - time to go bck and implement promises. Looks like weekend work will rely on this and review it a bit.
- from compass "a promise represents the eventual result of an asynchronous operation"