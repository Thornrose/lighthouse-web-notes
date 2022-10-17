# More Day 1 Notes
## Command Line Arguments

- allow for arguments to be passed to a program when running through command line, as the name suggests
- passed as strings
- useful for automated testing
- _disadvantage_: not useful on phones/tablets (desktop/laptop mainly)
- process.argv is built into node.js - use to process arguments
- first two elements should always be path to node and then path to script file

## Adding Numbers Assignment

- using `.slice(2)` will remove the first two elements of the array (paths)
  - this will make the old [2] into the new [0]! remember
- this execise also reminds of the above, that arguments are passed as strings - adding together would not be mathematical addition by default (i.e. 4 + 5 = 45)
- there are multiple ways of converting strings to numbers, but in this case we use Number()