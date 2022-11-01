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