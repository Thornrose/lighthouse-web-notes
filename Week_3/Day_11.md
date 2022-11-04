# WEEK 3 - day 11
## server example
- how does the .url and .method know? did we go over this before? might need to review if it's not made clear

- `url` property of `request` object points to the PATH (`/`)
- still not solid on call stack order - server_example app.js - 
  - server created
  - last line
  - server listening on...

  - Then "in requesthandler" will only display when there is a client request / response sent
   - it makes sense if you look at it and think about it a bit more. the first two lines are in global scope. "createserver" and "server.listen" are "non-blocking" and will return immediately.

- consider requests to different paths - these should be handlies each separately, right?
  - simply use if/else logic. you have the right idea. every path needs an end, and it can't come before or after a different end - every path needs its own separated logic
  - this can be cleaned up / better way to do it. base example here (foreshadowing). may involve Express functionality

- node `curl -I` shows status code info etc (__HEADERS__)

- `curl -i` shows headers and website (html etc)
 - basically always use `curl -i`
- note: when you dont use `end`, i believe that makes `connection` show as `keep alive`

# Day 12 - Git branches
- main branch can be for current, stable, working version
- other brances can be for experimental features, currrently being worked on to add
- `git branch` to create new branch
- `git checkout` to switch current working branch
- `git merge` to bring updates to main

## COOKIES
- `Set-Cookie` header
- cookies are now tags - id

# Day 13
- use `git checkout -b ...` to create AND switch to a new branch
 - cool to actually SEE what happens in real time when you switch brances. the files on your computer revert to last commit on other branch. so cool

 # day 14
 ## Bcrypt
 - never store passwords in plain text!
 - don't try to come up with your own solution to cryptography unless you want to specialize in it like PhD style
 - "rainbow table attack" vas talked about
 - encryption and hashing are separate things - encryption is reversible, hashing is one-way.
 - we are using `bcrypt` but as a dev, need to be up to date on strongest methods
  - vas seemed to show us a way where the salt and the hash are separate, but in tinyApp, hashSync seems to give the salting value at the same time as hashing.
- for `bcrypt`, i think at first i was a little confused at HOW it does what it does - especially here where it seems like the "salt" has not been saved. but here's what's happening:
  - take `$2a$10$WbBPy6ptN5cukh/TZ1GyWeY.vzWrJLilsGy3GwcaSxWu4.m9EItvu` as a generated hash at regstration. at login:
  - `$2a$10$` shows that the password was hashed with bcrypt, with a salt value of 10 (i believe)
  - next part starting with `WbBPy6ptN5...` is the salt string. bcrypt USES this value to check the final part:
  - `...SxWu4.m9EItvu` is the hashed password. bcrypt is doing some work in the background to check if this is matching the text of the initially set password. if the salt value is any different, it wouldn't get the same outcome. very specific match

  ## encrypted cookies
  - plain-text cookies are ALSO bad for similar reasons. too easy to change value and get in on someone else's info.
    - "forging http requests"

  ## Sessions:
  - sessions can refer to:
    - session cookies - cookies that expire after a browser is closed
    - user session - login/logout features on a site, OR the event of a user using an application
    - session - encrypted cookies OR a general abrtaction, referring to user data

- can store data in an encrypted cookie OR an ID value. something that matches an id on server side

- looks like this would also work in curl: `curl -X POST -i example.com --cookie "user_id=20126`

- so for the cookies it IS encryption we're using, not hashing.
- QUIZ NOTE: IF A server sends cookie data, it does it through the headers. it can do