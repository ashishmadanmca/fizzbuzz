# Getting Started with Fizzbuzz App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Client` and `Server` are separately developed and can be run on different ports. 
## Available Scripts

In the client directory, run:

### `npm install`
### `npm start`

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
This will run the react app (client side)

In the server directory, run:

### `npm install`
### `node index.js`

Open [http://localhost:3000/api/fizzbuzz/100](http://localhost:3000/api/fizzbuzz/:count) to view it in the browser.
This will run the node service on express (server side code)

##Problem Statement 

###Design an API which Returns data as Fizz Buzz Pattern:

A program that prints each number from 1 to 100 on a new line.

For each multiple of 3, print "Fizz" instead of the number.

For each multiple of 5, print "Buzz" instead of the number.

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


More on Fizz Buzz: https://en.wikipedia.org/wiki/Fizz_buzz


##Requirements:

Create an API which accepts a parameter “count” from user

API should return data in an array, which should be the output of Fizz Buzz program till count

BONUS: Validations on User parameters

BONUS: If you can host the API somewhere to check the functionality

BONUS: Unit Tests & Integration Tests
