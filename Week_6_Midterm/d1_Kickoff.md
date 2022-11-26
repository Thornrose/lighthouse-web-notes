# Midterms!
## Group 3:
- Me
- Max
- Will

## Collaboration with Git
- ...

## GETTING STARTED
- setting up midterm database with owner labber, password labber
  - DB connection credentials, do not forget
- i will be "project owner"

## Watching alt lecture w/ Nally
- user stories: think about typres of users: anonymous (not logged in), logged-in, who is that person - what could they want

- imagine "versions" based on a combo of user stories, wireframe, ERD

**DEMO IS 5 MINUTES**
- use "faked" authentication layer. haven't checked if it's in the code yet. but it's in the slides at least

- **MAP app will NEED to have some SPA features**
  - some pieces can be on separate pages, but the main map page will have to be able to update points in real time
  - look back at tweeter! you've DONE this

- more planning points: agree on variable/naming conventions 
- remember document.ready


## rewatching Francis


## PREREQUISITES

Your projects must use:

- ES6 for server-side (NodeJS) code
- NodeJS
- Express
- RESTful routes
- One or more CSS or UI "framework"s:
- jQuery
- A CSS preprocessor such as SASS, Stylus, or PostCSS for styling -- or CSS Custom properties and no CSS preprocessor
- PostgreSQL and pg (with promises) for DBMS
- git for version control

Optional Requirements

- SPA (Single-Page Application) Behaviour
- Hosting, such as heroku, netlify, github pages, AWS, or Azure

# Wiki Map

- A web app that allows users to collaboratively create maps which list multiple "points". For example: "Best Places to Eat Around Town" or "Locations of Movie Scenes".

Requirements:

1. users can see a list of the available maps
2. users can view a map
3. a map can contain many points
4. each point can have: a title, description, and image
5. authenticated users can create maps
6. authenticated users can modify maps (add, edit, remove points)
7. users can favourite a map
8. users have profiles, indicating their favourite maps and maps they've contributed to
9. use http://leafletjs.com/ (or https://developers.google.com/maps/)

## our user story:
- businesses who want their locations on the map
- people who want to create and share locations

## initial notes
- we will use leaflet as our map api

- 