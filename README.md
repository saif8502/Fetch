# Fetch
# My React Project

This is a small React project that fetches data from endpoint "https://frontend-take-home.fetchrewards.com/form" and submits the result of form to same endpoint.

## Dependencies

react

react-dom

react-router-dom

react-scripts

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

npm install

To Run Test Suite:

npm test

To Start Server:

npm start

## Reflection

This is a project built as an exercise by Fetch Rewards. Project goals included to allow users to select from options returned by an endpoint and submit the results of the form to the same endpoint via a POST request. 

An alert popup shows when the user tries to submit the form without fully completing it, thus preventing it from submitting the incomplete form. 

When the entire form is filled and submitted, a 201 status code is returned and the data submitted will be in response body. The user is greeted with an alert pop after the successfull submission.

I started this process by using the create-react-app boilerplate, then adding react-router-dom. I have created a basic Home page and Navbar. The "Register" button takes the user to the form which is the main task, and the "Home" button takes the user back to Home page. The website is fully responsive.

One of the main challenges I ran into was the "POST" method. This lead me to spend a few hours on a research.

At the end of the day, the technologies implemented in this project are React, React-Router-DOM, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the create-react-app boilerplate to minimize the initial setup. 
