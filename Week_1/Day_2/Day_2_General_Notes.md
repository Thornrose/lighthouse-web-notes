# Day 2
## Pair Programming
- driver writes (focusing deeply on coding), navigator reviews (and brings ideas, looks up solutions, confirms syntax, etc). True teamwork
- sounds like this can be done with VScode live share

### Why Pair?
- Approach - helps with planning and tactics

- Eases the workload - many hands make light work, one person code, the other checks syntax (great when studying a new language?)
- Confidence, affirmation - more assurance when trying new things, always have a ready second opinion
- Code quality - errors more likely to be caught - skills transfer between the two programmers
- Verbalizing - huge, being able to communicate the ideas clearly is ey in this process, vauluable in many contexts (teaching, interviews, etc)
- Waste less time - we are eachother's keepers, less likely to get distracted or spend too long on a problem

### The Darker Side
- Ego, Impostor syndrome, Competiton, Blame, Alone/Togerther - all issues that can be avoided with right attitude

- listen to and trust eachother
- boost eachother's strengths, build upon weak points
- no point tracking who did what, as long as you both can understand the code
- careful not to JUST use eachother for questions. both take active role in communication
- when driving, program "out loud" always describing what you are doing, ask questions
- when navigating, close/minimize your editor and keep web docs (MDN) and google at the ready

## Lecture (with Dominic Tremblay)
- most notes scratched on paper for this. 
- Dominic likes questions as we go, not wait for end
- "Solving Problems with Pseudocode" reading seems to cover some of the same ground. Pseudocode breaks down steps. A good way to figure out what you need to do BEFORE worrying about syntax - so that syntax can be tackled separately
- also notes on refactoring, reducing repetition. very good exampls


## Minimum values exercise
- accidentally pushed to a branch (main) that didn't exist? not sure where it went, git said it was good, but didnt match gist branch (master). interesting.

- side note: open locked markdown preview scrolls the preview alongside the editor. works for me
- FOCAL note: reason focal dir is not a git repo is because subfolders will be each their own. so no nested repos

## "Join"ing concepts
- precursor to using .join - we will use later


## Function Best Practices
- Growing Functions / Functions and Side Effects [artice](https://eloquentjavascript.net/03_functions.html#h_eVDWIAuyBK)
- discussing "helper functions" - you can setup multiple functions and use them within eachother (one-way)

question - if function declarations are hoisted, what happens when a function calls another function?

- careful not to add functionality you will never use

- as known, a function that _returns_ a value is more useful than something with a "side effect" e.g. values are console.logged along the way
- "pure" function has no side effects and does not rely on other external code (except maybe libraries?)
- this does not mean side effects are alwayd bad
- give functions good names! especially if you intend to reuse them
- concise but descriptive - action-based is best
- be adaptable to others' naming conventions, but also be consistent with your own
- remember to use camelCase
- remember to properly indent
- so if you find a function doing multiple things, try breaking it into multiple functions

to reiterate, 4 rules:

1. Name Functions Properly
2. Proper Indentation Is Key
3. Use CamelCase
4. give functions specific tasks

and then:

## Scope in JS

5. Pass In The Data Needed
    - "it is ideal if functions avoid reading outer scope variables. If a function needs some information, then that data should be passed as a parameter / argument making it available within the function's _inner scope_."
      - however when the function is executed, it can certainly use for the argument a variable previously defined.
    - if a functyion relies directly on a globally defined variable as input, it's not very reusable.
- remember global vs local scope

## Understanding Error Messages
- first line of error message should reference the line at which the error appears e.g. `testing.js:4`

- following lines that looked like matrix code (after "syntax error") is referred to as a _stack trace_ which indicates the state the program was in when the error occurred. All those lines mean something and are referring to (libraries?) other parts of javascript - incuding lines! and you can see where, e.g. `node:internal/modules/run_main:76:12`
- in bottom right hand corner of vscode, shows your current line and column on cursor. useful reference point

- breaking down a program into iterative steps is a foundation of automated testing
- using console.log to check each step is useful and simple

## re: Type Coercion
- always use `!==` !!!! you were doing it with just != before, probably caused some issues

- thnigs can get really wonky with != and ==