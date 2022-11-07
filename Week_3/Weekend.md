# WEEKEND WORK - EVENTS
- getting ready for client side, front end. more HTML, CSS and some JS

## What is a stack?
- tech stack seems to indicate the range of tools used on a given project. yes - the "collection of technologies"
- for instance, the stack for tinyApp was:
  - Web server: Node.js
  - Middleware: Express
  - Template Engine: EJS
  - Database: (none, just in-memory object)

## HTML refresher:
- `<html>` - represents the root of an HTML document
- `<head>` - provides general information (metadata) about the document
  - `<title>` - defines the title of the document, shown in a browser's title bar
  - `<link>` - specifies relationships between the current document and an external resource
- `<body>` - represents the content of an HTML document
- `<h1>`, `<h2>`, ... Heading elements implement six levels of document headings
- `<p>` - represents a paragraph of text
- `<div>` - Division Element, generic container for flow content
- `<ol>`, `<ul>` list of items with, or without numerical ordering
  - `<li>` - represents an item in a list
- `<a>` - anchor element; defines a hyperlink to a location or page on the Web
- `<table>` - display a data table. Note: not to be used for layout
  - `<tr>` - a table row
  - `<td>` - a cell in a table row

 ## CSS refresher:
  1. can add css directly to an element `<p style="color: red">red text</p>`
  2. can add style tags in the head `<style> p { color: red; } </style>` - i imagine this sets a default style for a given tag/element
  3. can link to CSS file (probably best practice to set as a base template?) `<link rel="stylesheet" href="style.css">`
      - confirmed,  method 1 nd 2 are to be avoided as much as possible. "unnecessary coupling" - we want modular!

## ID vs Class tags
- `id`s are used to UNIQUELY identify elements on a page.
- `class`es are used to identify elements of the SAME TYPE.
- target elements by ID from CSS using a selector with a harshtag `#` prefix.
- target elements by class using dot `.` prefix.
- maybe think of class vs ID the same way we think about const vs let - go with class by default, use ID if it becomes necessary?
- IDs need to be used for jumping within page using URL like ` http://yourdomain.com#comments`
- ID is less performance intensive but can result in less maintainable / modular design
- also fine to use neither if not needed. can work with nesting, tag names, pseudo-classes to craft CSS selectors.

## Event-Driven Architecture (EDA)
- when an event `X` happens, trigger event handler `Y`.
  - Client-side events:
- DOM events:
  - `onClick`
  - `onFocus`
  - `onLoad`
  - other custom events
- one library we use to demonstrate (test?) client side events is `jQuery` !!!!
  - server-side events:
- on node.js for example, an incomnig request is the event - you'd have a callback function that handles the event and sends a response.

- nodeJS API has an EventEmitter class that's built for this purpose.


## DOM Review
- HTML elements are referred to as nodes - data tree? hierarchical structure? hello?
- document object model - document OBJECT has properties and methods! eh
- Any hyphenated CSS property will be written in camelCase in JavaScript.
- The source of a website will not change and will never be affected by client-side JavaScript
- The DOM will also fix tags that have not been closed.
- 

## Bubbling and Capturing
- talking about event `propagation`
- again with tree structure - events take place in nodes and "bubble" up through the parents (nested elements in DOM)
- you can stop an event using `stopPropagation()`
- it makes sense that if an upper level element is set up with an event handler, then if you trigger the event on an element nested inside of it, that event wil still trigger. sure it might be a bit to keep track of in some cases but, i feel like it's natural
- _almost_ all events bubble - some examples that don't, such as `focus`
- most deeply nested event can be accessed by `event.target` - handlers on parents can always get details on where event happened
- there's a `this` involved here too - is there a connection i'm not making? 
- from article: 
  - For instance, if we have a single handler `form.onclick`, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to `<form>` and runs the handler.
  - In `form.onclick` handler:
  - `this (=event.currentTarget)` is the `<form>` element, because the handler runs on it.
  - `event.target` is the actual element inside the form that was clicked.
- another example shown: you can have a script in a div with the body as parent - it is OUTSIDE o the form - but the script involves `form.onclick` - so any form in the body will have this script applied - i'm pretty sure?
- `event.stopPropagation()` = stops elements above from running
- `event.stopImmediatePropagation()` = stops other handlers in same element
- don't stop unless you have a specific need to, can cause other issues if unnecessary
- `capturing` is rare but basically does the reverse of bubbling? sets an event to happen first that's set in the top, but then other events bubble after?
- based on a setting in `addEventListener`
- "The code sets click handlers on every element in the document to see which ones are working"
- more on this [here](https://javascript.info/bubbling-and-capturing) but they keep saying it is rare
- these two patterns lay foundation for `event delegation`

### Bubbling syntax example:

- HTML
``` HTML
<div class="d1" onclick="highlight(this)">1  
    <div class="d2" onclick="highlight(this)">2
        <div class="d3" onclick="highlight(this)">3 
        </div> 
    </div>
</div>
```
- JS
``` Javascript
function highlight(elem) {
    elem.style.backgroundColor='yellow'
    alert(elem.className)
    elem.style.backgroundColor = ''
}
```
- CSS (just giving attributes to nested divs)
``` CSS
.d1 {
  background-color: lime;
  position: relative;
  width: 150px;
  height: 150px;
  text-align: center;
  cursor: pointer;
  line-height: 25px;
}

.d2 {
  background-color: #007aff;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 100px;
  height: 100px;
}
.d3 {
  background-color: magenta;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
}
```
