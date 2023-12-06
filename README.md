# Project 2: Extending the basic JWKS server

This is a project for CSCE 3550

## Setup Project

-   `Node.js v18.14.0` must be installed
-   Run `npm install` to install all dependencies

## Run Project

Run `npm start` to start the server on `http://localhost:8080`

## Run Test

Run `npm test` to start the jest test

## Server running with the project 3 test client

![](https://github.com/gAlexander77/jwks-server-part-3/blob/main/Screenshots/Running-With-Test-Client.png)

## Test Report Output

![](https://github.com/gAlexander77/jwks-server-part-3/blob/main/Screenshots/Test-Report.png)

## Test running in Terminal

![](https://github.com/gAlexander77/jwks-server-part-3/blob/main/Screenshots/Test-Terminal-Report.png)

## AI Usage

For the third part of the project, I used ChatGPT to create the middleware for the register endpoint. With the express JSON middleware, I was unable to get the body containing the email and username so I had chatGPT create a function to parse through the body to get the JSON. I don’t know why Express was unable to get the body because when I created a Flask server and did the same request it had no issue getting the body. To get the output from the AI I explained the issue in the prompt and had it create custom custom middleware until something worked. I also had it show me how to use the crypto library to do the AES encryption. For this, in the prompt I asked it how to implement AES encryption using the crypto library.
