# Learning Leaflet

- from leaflet website, can import leaflet script via CDN into HTML file
- have to assign height and width of map (CSS)
  - thinking: have map fill right 50% of screen in desktop view (pinned to right), with list of points on the side
  - clicking a point will send map focus to that point or at least highlight marker on map
  - "add new point" button, if needed, would be at bottom of list of points
  - mobile view: map fills whole view, top bar dropdown menu to navigate

- at map initialization, must? set default coordinates and default zoom level. need tile layer. Various tilelayer providers
  - tiles: openstreetmap, can do google - many options
  - set an html element with a variable that can be toggled to switch which layer is displayed, put JS in separate file
  - can change marker display on focus?


## SASS
- SASS is a "preprocessor" that lets you use variables/nesting/inheritance that aren't normally available for CSS
- SASS website talks about running a console command, but in our project we have a middleware already implemented for that
- `variables` are set with `$` and are useful if you have settings you want to reuse
- `nesting` allows you to declare css in a similar format to how html is nested. i am noticing less use of classes here
- `mixins` looks like an awesome tool, paired with `modules` - basically a grouped variable
- `extend` seems perfect for conditional settings

## RANDOM THOUGHTS
- map list: 1 row flexbox / table / cards that wraps
- how do we make it easy to access?
- SQL data type for coordinates
