# Scheduler Project

- some of this is in the other w7 notes

creating first the daylist ite and then the list that will contain it.

"If a function that is a prop takes arguments, it must be wrapped in an anonymous function"

set up formatted spots function in daylistitem, but i feel like that could mode to a dataHalpers file

can only set useState INSIDE the function. just not inside the return statement, that's all

Basic workflow:
- Create a file with our component name
- Create & Export the component function
- Add the base HTML in the return statement of our component
- Create & Import a CSS / SCSS file holding the style of our component
- Write stories for Storybook to render our component in isolation
- Refactor the hardcoded content to use props & state

imortant lesson in "Refactoring Interviewer Components" about where to set up the useState setter function

res.json for sending raw json

- point on naming conventions: when using `li` and `ul` in React, these elements don't naturally have value/onchange ettributes: using react, we should pass state variables down *using* value/onChange attribute names so it is clear what they're going to do once they are used later on.

- cannot `useState` witihin a conditional - if you are watching state, you need to always be checking state. Can write conditionals WITHIN the default value

- remember... if you're trying to use `.map` on an object, need to use `Object.values` or similar to get things into an array

## useEffect
- this is important, dealing with side effects (App is called when rendered, calls, components, compoents call etc etc... side effects)
- "things like API calls, updates to the DOM, and event listeners, among other things"

The useEffect Sequence:
1. React - Run all `component functions` to generate `React element tree`. Store `effect functions` for after `paint`. Apply changes to the `DOM`.
2. Browser - `Paint` the required elements based on current DOM.
3. React - Run all `effect functions` submitted during `render`.

some rules:
1. Don't call Hooks inside loops, conditions, or nested functions. (put conditionals inside of the hook instead)
2. Only call Hooks from inside React components.
3. The effect method that we pass to useEffect must either return undefined or a function. (easily avoid issue by delaring multiline func)

- dependency array as 2nd arg for useEffect - sets what it WATCHES to run
- good for making async requests to API etc


from compass:

"Classes have an API that allows us to use this same type of pattern. We do have to think of it as a different approach. In the case of a class, you would do the same thing using the lifecycle methods. With any class-based component, you can implement one of the following functions:

- componentDidMount
- componentDidUpdate
- componentWillUnmount


These represent the lifecycle events that we would use to implement a similar pattern. We would make the initial request in the componentDidMount function. When the component updates, its componentDidUpdate function is called. Within the componentDidUpdate we would check to see if the term has changed. If it has, then we would make the API request."

seems important / ominous

- also we want to sater using `prev` to set state when we also need to access value of state

"The setState function (aka the function that sets the state) can take either a value or a callback that will be executed and the value that it returns will be set as the state. This callback has a parameter, and by convention, we call this parameter prev, which holds the value of the state BEFORE the setState was triggered by react. Since setState does batching, it's sometimes important to know what the previous state was when you want to update the new state based on the previous state value."

useEffect RETURNS cleanup function - "Timers, event listeners and socket connections are examples of side effects that require cleanup."

## Axios
- actually looks relatively straightforward.
- note: difference between PATCH and PUT:
  - PUT replaces the resource. any empty fields are nulled
  - PATCH only updates resource fields which are provided, leaving previous values in empty request fields
- use Promises before tyring to understand async/await

- `axios.get(url[, config])`
- `axios.post(url[, config])`
- `axios.put(url[, config])`
- `axios.delete(url[, config])`

- "With axios you can use the Promise `catch` method to handle error status codes. The error argument includes the status code

- can set up `selector` functions that take state and use it to create new data. remember that state is a *reference* to something... if state is an object, you can select that object's properties

- promise.all is pretyy cool

## Custom Hooks
- covered pretty will in lecture. if only i was already at this part.
- must start with the word `use`


## Testing
- integration testing: "When we combine different units of code to create an application, we are `integrating` them. Developers often debate what the term "integration testing" describes. For our purposes, we will describe integration testing as: *the process of proving that two or more units of code work together*."

## custom hooks with appointment
- need to track current `mode`
- need `transition` and `back` functions
  - transition EMPTY to CREATE
  - back CREATE to EMPTY
  - transition CREATE to SAVING
  - transition CREATE to SHOW
  - transition SHOW to EDIT
  - back EDIT to SHOW
  - transition SHOW to CONFIRM
  - transition CONFIRM to DELETING
  - transition CONFIRM to EMPTY

note that in the above there is no no transition "from" saving or deleting - it's a carry on from the point before

## Immutable update patterns

- i really feel like my solution for "back" function is going to go against this, but...
- this will probaboy be a good ref to come back to


Bro i seriously feel like I should do this whole project over again at some point. it scares me how i can go from feeling so confident last week with the initial steps, to feeling like i'm on very thin ice with my understanding now


**bug** for mentors tomorrow? man i don't know...
- put request is working. state is being updated. but Transition is not happening.
  - application ln 49-57
  - index ln 25-27
  - useVisualMode 7-15

**fixed!** for what I was doing, i did not need to return a new promise- the axios call IS a promise, so I just needed to return that.


## Testing with Jest

setup / teardown:

- beforeAll(fn, timeout)
- beforeEach(fn, timeout)
- afterEach(fn, timeout)
- afterAll(fn, timeout)

-  `propTypes` works as a "static enforcer" - checking to make sure that correct datat types are passed to props in components with react


"In the final example above, we use a query called ByTestId. This is the equivalent to `querySelector("[data-testid=student-name-input]")` and it requires us to alter the JSX to include a data-testid prop. If there is no reliable way to query for a node then attaching the data-testid prop provides a good compromise. Sometimes we need to change our code to improve its testability."

testing analyzes / uses three phases: Setup, Change, and Verify

## Application test suite

- our exisiting test for Application is like an all in one, it doesn't test any pieces, just runs everything all together. so we need to break it down to have more confidence:

- We will mock the functions we use from the axios library.
- We will write a test to confirm that the scheduler can load data.
- We will write an asynchronous test that waits for a component to update before proceeding.
- We will use containers to find specific DOM nodes.
- We will chain promises to handle asynchronous testing.
- We will override mock implementations for specific tests.
- We will use setup and teardown functions provided by Jest to perform common tasks.


important: `npm test -- --coverage --watchAll=false` for coverage reports

next set:

- "loads data, cancels an interview and increases the spots remaining for Monday by 1"
- "loads data, edits an interview and keeps the spots remaining for Monday the same"
- "shows the save error when failing to save an appointment"
- "shows the delete error when failing to delete an existing appointment"


OKay.... so i have screwed up. but it's not the end of the world
1. update spots does NOT work when interview is booked through an edit. spots go down even though it's not a NEW interview.
  - that's a problem that I may get rejected for, but i need to move past it.
2. not sure how to use the `mockRejectedValueOnce` for error testing
^ fixed

## Cypress
- arrange, act, assert
- .visit
- .contains - looking for content of element (text displayed on page), but can also be used for data selecting like get
- .url
- .get - looking for element tags (reccommended to use data-* tags for consistent targeting)
- .click
- .type
- .pause

there's also a cypress testing library with more testing methods, like react testing library

the test we're doing:

- Visits the root of our web server
- Changes the day to "Tuesday"
- Clicks on the second "Add" button in the schedule
- Enters their name
- Chooses an interviewer
- Clicks the save button
- Sees the booked appointment
- Clicks the edit button
- Changes the name and interviewer
- Clicks the save button
- Sees the edit to the appointment
- Clicks the delete button
- Clicks the confirm button
- Sees that the appointment slot is empty

- don't need to `get` before doing `contains`