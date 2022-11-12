## Tweeter
- in-browser interface, JSON API, Single Page Applicaton (SPA), using HTML, CSS, Javascript.
- server provided, we focus on front-end.
- working with Document Object Model (DOM).
- starting server with `npm run local`

## Code discovery
- i have cloned the repo and now looking at files.
- package.json indicates dependencies:
  - body-parser
  - chance (what is this?) <- RANDOM GENERATION HELPER.
  - express
  - md5 (what is this?) <- FOR HASHING
  - nodemon

- index.js - server file
- set port, using express and body parser
- `express.static("public")` what is this? <- LETS APP USE FILES IN PUBLIC DIR? which we do have
- database in file in `lib` directory - db of tweets
- interesting require syntax for DataHelpers, expects db to be parameter and that is called immediately
  - why is this the only one called with `.js` at end?
- date-adjust sets given dates for initial (test?) tweets - but this isn't assigned to var?
- tweetsRoutes - so, routing is in its own file this time?
- don't worry about delay because it is simulated. to be a random amount of miliseconds
- every time server is started, initial tweets will have their dates changed - FILES THEMSELVES will be updated by filesystem in date-adjust.
- Stef has a point about tracking changes to initial tweets, he had a git command for it but im not sure.
- it's odd to see but makes complete sense, module.exports is being used on the fuction as it is defined, not separately.

- ok, tweets.js is also exporting like crazy - it's runnung as it is required, and as opposed to being an object containing functions we can use, it's basically holding the routes and giving the server access in index.
- the modularity of it all IS still a bit mind-boggling.
- tweets.js does show how everything is going to be all on one page.
- md5 is a hashing function, it's present in user-helper but isn't called?
- jQuery is here but i don't understand the file AT ALL.
-  "problems" in normalize.css file (assuming this is our resetter) but looks like problems are just based on the properties being old or unused?
## results of discovery
- AS OF this moment i don't see where the HTML is connected to the javascript. how does it know to render index? is it jQuery? this line: `app.use(express.static("public"));` could be it, since index is the ONLY page in public.
- changes to STATIC files (`index.html` for example) do not require server restarts.
- via package.json: `npm run local` runs a nodemon command. the `--watch server -e js` makes it only restart when .js files are modified

- after an hour of looking at the files, i have a _decent_ idea of how it's working. but not perfect.

## external fonts:

using `Bungee` and `Source Sans Pro`

- google fonts seems tight
- note: font issue i was having may have had more to do with the fact that i was trying to set a bold text to bold - when i should have been trying to set the other text lighter. oh well

## Making the form
- forms are typically submitted as content-type: application/x-www-form-urlencoded: this is so it gets translated properly
- we are going to use AJAX / jQuery to submit form asynchronously while staying on same page.
- ok. going with `input` as the event we want to listen to.
  - note that input logs each key - but it only logs ONE input for text copy-pasted into the field.
  - is there a way to get the value of how much text is being added or removed?


## calling it done so far with tweet container.
- some spacing doesn't seem quite exact. maybe will change when avatar added to the mix
- icons appear to have a transition fade - this is not done on my end. not sure if they want us to
- also a little confused on some width behaviour. `new-tweet` doesn't act the same as the below tweet, i'd rather get the below tweet to not stretch so much

# Before submitting, please refactor and add more commentary.

## form submission with jQuery
- need to use event handler to prevent standard form submission and submit through ajax instead
- 

## watching out for black hats
- getting introduced to script injection - my text box is not protected, so if someone types in html, my code will read it as such

## getting closer to the end.
1. implement responsive design. follow specs as close as possible
2. start doing some refactoring and cleanup wherever you see possible.
  a. add comments and use heading comments, like was done with tinyApp.
3. go down the requirements list and check everything off - do one FULL pass first then go back and fix anything that needs fixing.


what needs to change for responsive layout for desktop?

- FOR MOBILE: nav bar backgrouns becomes transparent
- main container flex-direction switch to row
- nav bar height shrinks a bit
- profile picture w/ background get contained - width becomes a percentage, fixed height, image needs to fit so as to not be distorted
- tweet boxes should still act more or less the same

breakpoints to use:

- i think we just start with one breakpoint for desktop at 1024px. (max or min? i forget)

## submit notes:
- nodemon is set as a dev dependency, but `npm local` command would require it
- slideUp between errors isn't perfect