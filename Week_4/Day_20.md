# WEEK 4 START
## Lecture on CSS with Vas
## Starting with CSS -
- flexbox is a method for positioning and displaying items with CSS?
- talked about in lecture how the Browser is what gives default styles to html. 
- `display` is a default style that applies to `block`-level elements : take up entire space of parent
  - so this is why a `p` or something will appear to be stretching all the way across a page.
  - will all block-level be on new line then? (and inline below could be next to eachother? idk)

 Block elements include:

- headings `(<h1>, <h2>, <h3>,<h4>,<h5>,<h6>)`
- div `(<div>)`
- section `(<section>)`
- footer `(<footer>)`
- article `(<article>)`
- paragraph `(<p>)`
- lists `(<ul>, <ol>)`
- nav `(<nav>)`

then we have display: `inline` - these elements only take up as much space as they need! we like inline, at least style wise i think

- can't add width/height/padding/margin properties to inline elements

inline elements include:

- anchor `(<a>)`
- em `(<em>)`
- strong `(<strong>)`
- span `(<span>)`

then we also have `inline-block` whivh shares properties of both above - `img` and `button` are only elements that have default display properties

## Flexbox
- AKA CSS Flexible Box - layout module in CSS. good for responsive deign / layouts that need to adjust to different screen sizes
  - Compass says: add `display: flex` property to `parent` classed element
    - this looks specifically useful for arranging divs?

more commands:

- `flex-direction:`   row or column, reverse or not (reverse row aligns right)
- `justify-content:`  determines where flex items are along `main axis`? yep, get it
- `align-items:`      determines layout on `cross axis`

so - main axis = vertical and cross = horizontal. why wouldn't they just say that?

`Child properties`: `order` controls order of elements without having to modify html, `flex-grow` says how much space an item should take up

- [more HERE probably](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## FLEXBOX FROGGY
- Notice that when you set the direction to a reversed row or column, start and end are also reversed.
  - same with horizontal/vertical if direction changes to column

## ON em's
From Compass:

What's an em?

An em is a unit of measurement. However, unlike a pixel which has a fixed absolute size, the size of an em is relative to its parent's font size.

For example, if the font-size for a `<div>` is 16px, then 1em of space in that `<div>` is 16px. 1.5em in that `<div>` would be 24px, 2em would be 32px, etc. By using em to specify things like margin, border, and padding, the spacing of those things will automatically change if a change is made to the font size.

## Talkin' 'bout CSS
- [this page](https://learnxinyminutes.com/docs/css/) has a pretty decent list of css operations
- /* You can select an element which is a child of another element */
  - `div.some-parent > .class-name { }`
- /* At appropriate places, an asterisk may be used as a wildcard to select every element */
  - `* { }` /* all elements */
  - `.parent * { }` /* all descendants */
  - `.parent > * { }` /* all children */
- media queries seem important for real-world cases
- lots of discussion on specificity. different selectors have different precedence.
- pseudo-classes are basically meta-attributes - has a link been visited, is this being hovered over, etc

## JSONVue!
- chrome extension, lets you read json :D this is nice

## Adding JS in the browser
- use `<script>` tag in head or body of html
- link .js file
- javascript is default script language
- put scripts at bottom?
