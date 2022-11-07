# TinyApp Project Notes

## What is a template engine?
- consider that in some examples we've seen html shoved into a js code file. seems like it could get messy quickly.
- templates define presentation separately from logic
- this makes it easier to work on/ debug parts separately
- also helps keep HTML file length manageable

- need template engine - in this case we will use __Embedded JavaScript (EJS)__.
- syntax example: `<%- inclue('partials/_header') %>` <-- embeds partial. hypen indicates rendering raw HTML
  - i wonder if this is why you would send/send/send vs put it all in one end line?

- jade is another engine but it's got complicated syntax
- `res.render` loads _EJS view files_
- need to `app.set('view engine'), 'ejs')`
- need to have a `views` folder - ejs assumes this folder exists and you are looking inside of it when loading views
- ejs file extensions!
- `partials` are snippets of resuable code
  - contain metadata for html docs. bootstrap styles?
- so - your `pages` reference the partials, and your main .js file references the pages. seems straightforward enough
- can use forEach method in ejs files?
- using `<%= ...` to reference variables? sheesh. "escape HTML"
- might need to look back at [this reference](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)
- thi seems important: "The EJS partial has access to all the same data as the parent view. But be careful. If you are referencing a variable in a partial, it needs to be defined in every view that uses the partial or it will throw an error." ?????
- this whole variables thing seems like it oculd be useful in an "extends" kind of way

## Bootstrap
- is a website/tool that has css

## EJS setup
- using `urls_index.ejs` to display all URLs and shortened forms - this will be our database.
  - referencing in server.js using shortcut described above - EJS knows where to look (views folder)
- `views` directory is FRONT-END FILES.
- `templateVars` NEEDS to be passed as an object. this is how EJS works. we need the keyc
- then in our ejs file, we are using `<%= ...` to reference variables /  "escape HTML"

- from compass:

If we would like to run some code without it displaying on the page, then we can use the slightly different syntax of `<% %>`. For example, if we only wanted to show our greeting if it has a value, then we could do something like this:
``` html
<!-- This line will not show up on the page -->
<% if(greeting) {%>
<!-- This line will only show if greeting is truthy -->
<h1><%= greeting %></h1>
<% }%>
```
- ^ this is a mouthful

- `:` in a url indicates a _route parameter_ [more here](https://expressjs.com/en/guide/routing.html#route-parameters). pretty clean

## CRUD and HTTP
- Create (add new record), Read (retrieve value of existing record), Update (update/change value of a record), Delete (remove a record)
- Javascript object `users` example:
  - create: `users["5315"] = {first_name: "John", last_name: "Smith"}`
  - read: `users["5315"]`
  - update: `users["5315"].first_name = "Jane"`
  - delete: `delete users["5315"]` <-- haven't actually used `delete` in js yet
- HTTP corresponding commands (safe status):
  - POST (not safe)
  - GET (safe: read-only - but still sometimes has side effects)
  - PUT (not safe)
  - DELETE (not safe)


- later on, we see databases can be used to persist data so it is not removed when apps are restarted.

- "safe methods" and "idempotence" (think identical/impotence)
- for reasons ("historical") we aren't going to actually use put/delete. would need something called _http method override_

## setting up a form
- form tag has `action` and `method` attributes, important
- `urls/new` must be defined before urls/:id - why? because if after, express would read "new" as a ROUTE PARAMETER - remember `*` from lecture
  - when setting up server like this, always go from most specific paths to least specific, (with a catchall at the end for 404s?).
- added a `body-parser` library that needs to go before any other get routes. it affects the `req.body` of all
  - this allows us to use the POST method and parses input into JS object format. Via Express
- i set up my own random string generator? feel like it's flawed, but I also tried to make it myself vs copying code from elsewhere.


## form set up - basic redirecting implemented
- CURRENT EDGE CASES TO CONSIDER:
  - what would happen right now if a client requests a short url with a non-existant id?
    - it still creates a new link , but the link redirects to "undefined". still says 302 found. times out.
  - note status code `302` for "found" and redirects - this code means that what you want "has been temporarily moved" which is not exactly the case
    - looks like we might want a `303` instead
    - could test curl on a REAL tinyURL to see how that looks
  - url database is wiped when server restarted.
  - can't remove link or edit if misspelled?
  - much more.

## Day 2
  - installed nodemon - will auto-restart server when file is updated
  - HTML forms only support GET and POST. else we can use method override or Ajax

## Cookies in Express
  - adjusting the app to have users, logging in, showing names
  - adding `cookie parser`- need to `app.use`! can't just require and leave it

  - PROBLEM: currently it is possible to register with blank email and password fields
  - PROBLEM: register with existing email adds new user, should not

## need to track down CURL commands
  - `curl -u username:password URL` to log in?
  - `curl -L URL` to follow redirect
  - "POSTing with curl’s `-d` option will include a default header that looks like: Content-Type: application/x-www-form-urlencoded."
  - "By default, curl doesn't send any cookies but you can add your own cookies via the `-b 'name=value'`"

  - `-b` was the key to the solution! :
    -`curl -i -X POST  -d "longURL=testurl.com" localhost:8080/urls/j6s8ls -b"user_id=undefined" `
    - `i` displays some header info
    - `X` .. not entirely sure? something to do with proxy?
    - `d` involves settting an encoding to be able to submit data to a field
    - `b` is for setting a cookie.

    ## Hashing passwords with bcrypt
    - might not work for previously added users (pre-registered test users)?

    ## mocha/chai testing - 
    - need to use `npx mocha` instead of npm test.

    ## FEEDBACK 
    - project is done! got some notes back:
      - could have separated databases into their own file. makes sense.
      - could have mentioned 'npm start' / nodemon in "getting started" section of readme.
      - `app.listen` should have been at bottom of file! interesting, i wonder why
      - commit messages were good.

## REVIEW W/ GARY
- looks like some places where I passed  templatevars with only one variable - could have sent as just the thing sent over as an object?
- res.send default type is html. but could also put html in the error message to link back to previous page! neat
- getUserByEmail:
  - could make a const inside for loop to actually define the user istead of doing database[user]...
  - don't need to have backup `return underined`, if it doesn't return anything then.... it's already undefined
  - could do `Object.keys(users)` to iterate - but could ALSO even better do `Object.values(users)`. object.values seems verrry useful.
- post register:
  - could have used ES6 object notation to assign values by name id, email, password instead of id: newUserID etc.
- post login:
  - checking password and email with or `||` technically better to send message "bad email OR password" that way bad actor can't tell what is wrong. (also fewer lines of code - one error message instead of two)
- urlsForUser:
  - could again use `object.keys`