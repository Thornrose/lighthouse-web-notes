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