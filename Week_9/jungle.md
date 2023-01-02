# Jungle project

- Use Credit Card # `4111 1111 1111 1111` for testing success scenarios. [more](https://stripe.com/docs/testing#cards)

- Start getting comfortable with the CLI output of `rails routes` as you will be using this rails command often, especially at first. After working with routes enough, one eventually gets comfortable deducing the output by just looking at the routes.rb file, but that will take some time.

- `raise` will cause an error - can pass variables through here, kinda good way to do console logging where needed. debugging / working incrementally

- first bug: fixed with `humanized_money_with_symbol` - this is a helper function provided by the RubyMoney gem (which i think i have globally? yeah - it's in the project gemfile though, `money_ rails`). it's a function, so it makes sense where it goes (ahead of the thing it's working on).

## sold out badge
 - curious: can still add to cart from the product page? should we make it so they cant view the product at all?
 - could be stretch, could be something they expect us to notice

## Namespaces

- `::` is a constant lookup operator
- solve conflicting method / class names by using `modules`
- we can nest constant lookups as deep as we want. Second, we aren't restricted to just classes and modules



## Rails DB migrations

- first of all, `rails db:reset` is what i need to do to.. reset the database. server needs to be off
- ` rails generate migration` filename_with_snake_case - creates migration file that you now need to add to

can also do rollbacks if needed
- newer versions of rails tend to use 'rails' over 'rake'

## User auth

- email/password based. collecting first name, last name, email, pword, pword confirmation
- auto login on register
- pwords stored as hashed strings

stories:
- As a Visitor I can go to the registration page from any page in order to create an account
- As a Visitor I can sign up for a user account with my e-mail, password and name
- As a Visitor I can sign in using my e-mail and password
- As a User I can log out from any page

out of scope:
- No need for sending a confirmation e-mail.
- No need for account verification.
- For now, don't restrict any pages from access. Visitors and Users can view any page and perform the same actions.
- store the hashed password into a `password_digest` field (model column)
- use `has_secure_password` and `bcrypt`
- we have `gem 'bcrypt', '~> 3.1.7'` in our Gemfile
- do not use `Devise` and `Sorcery`
- `bin/rails generate controller <name>` for `users` and `sessions`
- `bin/rails generate model [fields]` for `users` model
- styling / polish at the end


plan:
- step 1 is generate model. following Simple Authentication with Bcrypt guide
  - reason we are using model and not migrate: model generates the actual model file. migrate wouldnt. model also creates migration
  - so we need `rails generate model first_name last_name email password_digest`


notes:
- `rails db:migrate` updates the db, don't need to run reset after
- used provided template from guide, should be able to go back and mimic product create form for styling
- `before_filter :authorize` could be useful to keep logged in users from reaching the signup page?
- sign in/logout seems to work, but could be more user friendly. also not connected to payment details


## EDD - error driven development\
- 2nd EDD video is REALLY Good. 3rd as well. 1st is mostly a review ofg what we had just done / did with admin categories