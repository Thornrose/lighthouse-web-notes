# Week 4 Day 2

## jQuery Event Handling
- this was a reading i should have done on the weekend, doing it now because it seems like we'll be coming into using jQuery today.

- jQuery:
  - IS A JAVASCRIPT LIBRARY.
  - helps with browser compatibility: `$(window).width()` tells you window width in any browser, vs much more js you'd have to write in certain cases
  - cleaner API: can do in one what html + js would need to do. example (really just writing out for practice):

``` js
$("#foo").on( "click", function() {
  console.log("Foo element clicked");
});

// or:

$("#foo").click(function() {
  console.log("Foo element clicked");
});
```

## Events
- it's been stated but maybe i haven't noted: using inline scripting is not recommended. we want modular. instead of doing something inline, set an id / class on something, then set up your script:
``` javascript
// Event binding using addEventListener
const helloBtn = document.getElementByID("helloBtn"); // having to 'get' the element and assign it to variable, separate from adding event listener

helloBtn.addEventListener("click", function(event) {
  alert("Hello.");
}, false);
```
- now, here's the same thing in jQ:
``` js
// Event binding uing a convenience method
$("#helloBtn").click(function(event) { // 'get' element in less than half the code.
  alert("Hello.");
});
```

- there are a few different ways to set up listening with jquery. good info [here](https://learn.jquery.com/events/introduction-to-events/)
- using `on` method seems to be syntactically consistent - the other options maybe not?
- things that make sense about setting event listners on parents of children vs children themselves - bubbling & delegation
- in above examples, we're setting a callback function anonymously - but we can also define callbacks outside and pass them in, as always
- `event` is an object itself - jQuery wraps what the browser made - lets us access `originalEvent` if needed

## DOM events / browser console
- so directly in the console, you can experiment with events - 
- check this out:

``` js
document.addEventListener("dblclick", (event) => {
    console.log(event);
    const xCoord = event.clientX;
    console.log(xCoord);
});
```

- the above was a quick experiment i did - the point is that `event` comes through as an object with a TON of properties - some relate to location, etc... so many properties/attributes
- so:
  - keypresses seem to go in this order: keydown > keypress > input > keyup
  - `shift` and `cmd` only give keydown > keyup.
  - don't use `keypress`! at least, MDN says it's deprecated.
  - `keydown` seems like the most logical thing to use?
  - keydown/keyup have info in`code`
  - input has info in `data`
  - backspace is special, obviously - data is null
- i tried adding the event listeners as scripts, kinda froze the page at first? so feel like that is less than ideal

- interesting point about "long-running" applications: "Essentially, if we have any interest in removing event listeners (which we should in “long-lived” applications), then we need to keep a handle on our callbacks. This means we cannot use anonymous functions."

``` javascript
var element = document.getElementById('element');

function callback() {
  alert('Hello once');
  element.removeEventListener('click', callback);
}

// Add listener
element.addEventListener('click', callback);
```
- so you set the callback function to contain removal, then when you run listener, you remove it at same time?
- or testing you can use `dispatchEvent()`
- event delegation with jQuery just makes so much more sense...
- inline listener for errors is a last resort for checking errors?

## quiz notes:
- `focus` is better than `click` to catch when a user has something selected. example: they could use tab key to get there instead
- `blur` is the event when an element loses focus^
- `mouseover` is the JS event to listen to. `hover` is only in CSS
- `submit` is an event on a form... not just clicking a button.

## setting up an external .js script:
- note that `console.log` will log in DEV console, not your (server) console.
- `$(document).ready` runs callback when DOM can be manipulated by jQuesry. basically waits for all elements to load first
- ok, you can define functions outside of doc.ready, but you want it to run inside, probably. Nevermind, nope, you can't. at least, you can't declare variables.
- feel like I should have been taking notes during lecture. getting memoires from rewatching. remember `document.getElementByID`. you don't have to go element by element from body down.

- i am thinking we can do some thing with `innerhtml`
- arrow functions will mess with us herer because jQuery (helpfully) applies `this` to the element we are targeting
- we're just using `event.target.value`.
- ok this one i figured out on my own: we are referencing the output element by its location near textarea. THIS DOES FEEL FLIMSY!
  - if anything MOVES around that div neighbor, this will need to be changed.
  - I still think there is something that can be done with that "for" attribute in the output element but i may need a mentor for that.

## Ajax
- 2 decades old?
- AJAX is __Asynchronous Javascript And XML__. Ajax http requests dont interrupt a user's interaction with current page.
- instead of loading new page, javascript modiffies the DOM based on server response
- ajax is not a library. supported by all major browsers
- jQuery is a library that IMPROVES how ajax is done
- relatively simple example - script sets an event listener on a button, sets a promise on a get request, and then translates html data to dom. transferred as json strings. jQuery does string to object conversion.