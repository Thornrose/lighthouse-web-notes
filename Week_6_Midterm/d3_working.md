# Lots of notes will go in here

## INSOMNIA
- use `ctrl + spacebar` to access environment variables (for now, one setup, just set to host as the localohost 8080 address)
- if VIM comes up, `i` to switch to input mode, the `:wq` when done to quit

## Getting reacquainted with jQuery and AJAX
- looking at tweeter to jog memory
  - `tweets.js` is the router. setup as built within exports.
  - this means that when it's required into server, it is acting on the index path `/` so i think we could set it up like this.
  - `db` is required in server
  - tweets.js also uses `datahelpers`, which is also required in server and passed
  - datahelpers are just regular functions. nothing fancy.

- need to create a query for get * from users where user = req.params.id?

## GET MAPS
- had to remove these lines from header for testing, add back if needed:
<!-- <% if(user === undefined){ %> -->
<!-- <form class='login_form' id='login_form' method ='GET' onsubmit="loginHelper()" > -->
<!-- <% } else { %> -->
<!-- <% } %> -->
- fixed

- idea about making it so that users can't add points: check if user is there within set popup?