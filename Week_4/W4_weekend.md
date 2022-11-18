# Relational Databases, SQL

- AKA RDBMS (relational database management system) and Structured Query Language

- Relational Databases organize data in _TABLES_, using columns and rows

## What is a database?

- flat files, non-relational (NoSQL), relational (SQL)
- relational db management systems: postgreSQL, MSSQL, MySQL, SQLite. (we will use postgreSQL in bootcamp)
- a more complex but more standard dataBASE is a collection of tables each with its own columns and rows, that may be linked together because the data is related in some way. modularity principles coming into play again

### Updating for repetitions:
- we want to avoid repeating data, and need to really have accuracy with any given data entry (no misspelled names)

### Primary and Foreign keys
- where relations start to come into play
- Primary Key (PK) - main key for ROWS of a table. like, and ID#. each row must have unique value
- these PKs can be used in other tables - when done, they become Foreign Keys (FK) in that other table. makes sense, because that table might have its own set of PKs that then can be used elsewhere and so on and so forth
- this system also helps with not needsing to update changing data in multiple places, it's update in one place and is only referenced elewhere - the references still point to the same place

### DBs and CRUD
- databases also need to be CRUDlike / BREADlike - the management systems (RDBMSs) need to be able to read data, create new data, update data, delete data...


## Visualizing Databases
- we can use Entity-Relationship Diagrams (ERDs) to understand dbs
- Parts of an ERD / db:
  - `Entity` something you want to track
  - `Attribute` characteristics of an entity
  - `Primary Key` - identifier that miust be unique per entity. sometimes need `composite key`
  - `Relationships` - describes how different entities interact - uses verbs
  - `Cardinality` - "count of instances that are allowed or necessary between enity relationships". has a minimum/maximum
    - kindof near the idea of hierarchy: example, if you have a database of students and they have phone numbers - you can have a student with 0 or multiple phones, but you'd never have a phone number with no corresponding student.
    - various symbols that describe mins/maxes - "crow's foot notation"
      - One - Mandatory
      - Many - Mandatory
      - One - Optional
      - Many - Optional
    - need a bridge table for many-to-many tables

## SQL Intro
- not sure what will change between learning SQL vs postgreSQL, but so far we're seeing
  - `CREATE TABLE`
  - `SELECT ... FROM`
  - `WHERE`
  - `LIKE`
  - `%` wildcard using like^, can also use `_` to note a letter before or after 
- negative numbers with `ROUND()` will round to nearest 10, 100 etc
- `<>` not equals operator
- `IN` - i think this is useful for selecting multiple items, as in they are IN the tabele. vs LIKE which pinpoints / filters
- `BETWEEN ... AND` for ranges, inclusive
- don't seem to need brackets very often (but sometimes required)
- video on complicated expressions [here](https://www.youtube.com/watch?v=9pfL0Hj1Axk&t=265s&ab_channel=AndrewCumming)
- `DISTINCT` for countinglisting repeating values only one time each
- need to brush up on `GROUP BY`, also not 100% on filtering with `NOT IN`
- `AS`? names new column for display?
- first try 8/8 on sqlzoo # 5. i guess i'm getting it

QUIZ NOTES

- `SELECT > FROM > GROUP BY > HAVING > LIMIT` is correct syntax, haven't seen `LIMIT` before
- q4 was rude, but `CREATE` is a command after all, is my takeaway

- also `GROUP BY` comes before `ORDER BY` (ORDER BY always would come last?)