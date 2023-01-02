# more ruby studying

i guess i DO have irb in the command line... go figure

- in Ruby, any keyword with a capitalized first letter is considered a constant

- Capitalized words can be used to define a constant
- A constant can refer to a Module, a Class or simple data like Floats and Strings
- Namespacing is used heavily to limit the exposure of constants defined in the global namespace
- The :: Syntax is used to access constants (Modules, Classes, etc)
- It is convention to only capitalize the first letter when defining Class and Module constants like Apple
- It is convention to capitalize and underscore the entire name when defining value constants like FOUNDED_BY


# (Week 9 Monday)

example prompt:


`Player 1`: What does 5 plus 3 equal?
> 9

`Player 1`: Seriously? No!

`P1`: 2/3 vs `P2`: 3/3

----- NEW `TURN` -----

`Player 2`: What does 2 plus 6 equal?
> 8

`Player 2`: YES! You are correct.

`P1`: 2/3 vs `P2`: 3/3

----- NEW `TURN` -----

... some time later ...

`Player 1` wins with a `score` of 1/3

----- `GAME` OVER -----

Good bye!

- definitely need class `Player`

  - instance constant `score` set to initialize at `3`
  - name / `id`: initialize arg string, example `"Player 1"`
  - Player class is initialized with a state for name that can be read but not changed, and a state for score that can be both read and changed. players need to be able to answer questions, and have their score set (or not) based on their answer.

- class `Game`

  - takes in two players as args. player names are input as argv? game should be able to access the methods on player to set score. game can start and end. 

how does the game go?

- game start
- loop: turn
  - first turn goes to player 1
  - generate question for player 1
  - accept player 1 answer
  - check answer
    - if correct: 
      - tell player they are correct
      - start new turn for other player
    - if incorrect
      - tell player they are incorrect
      - lower player score by 1
      - start new turn for other player 
- loop: turn
  - ...

- at end of every turn, check player score
- if player score is 0, say other player wins with score
- game end

each turn is a new turn object w/ q

player: has score

turn: creates question, takes in player input, checks answer, sets new player?

game: init, welcome message, loops 2 turns, checks if game is over between each turn


### game
relevant info:
- state - running / over?
- last player?

init with:
- welcome message

public methods:

### player
relevant info:
- score

init with:
- name
- score

public methods:

### turn 
relevant info:
- answer
- user answer

init with:
- question with random numbers

public methods:
