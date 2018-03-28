# FancyCars README

# Scope of FancyCars Project
In this Project, following scenarios were implemented:
 - Show 10 cars and for each car they want to show picture, name, make, model and availability of the car.
 - Sort by both name and availability of the car
front-end
 - Show buy button but it only shows up if Availability is “In Dealership”
 - Make homepage mobile optimized and responsive

# Technical Stack
This project has been build primarily with React, Redux, Redux-thunk

# JSON Stubbing Details
In order to mock the fake the api calls, jsonstub.com platform was chosen. It allows to make 45 api calls in minutes. Please note, that the production build of the product:
	- works smoothly in firefox
	- does not work in Google Chrome, because the json stub server does not include Access-Control-Allow-Origin header in response to the preflight response. A CORS will fail if Access-Control-Allow-Origin is missing.
	A workaround to check the compatibility of the code in google chrome, will be to download the project, install the dependencies and run "npm run start"

# Run the project
## Firefox
- Install the build folder and open index.html in Firefox

## Google chrome
 - Download the whole Project (details for this approach is explained in the JSON Stubbing Section)
 - install the dependencies using node package manager by running 'npm install'
 - in the node terminal, run 'npm run start'
 - navigate to 'http://localhost:3001/#/' and you should be able to view content

# Overall Structure of the application
## Loading Cars list
When the user accesses FancyCars, an api call is made to jsonstub to get cars List. This information is updated in the store to ensure that user can start to view the content of the page.

## Updating Cars Availability:
For each car, request to get its availability detail is made right after the store is updated with the cars List. This design ensures that while the user is processing information on the front page, at the backend store is being updated with availability information as well. Beauty of asynchronus calls!

In a large Scale Setting, we need to ensure that when the availability of a car is updated, the content of the entire application is not re-rendered. To ensure that FancyCars is performant at a large scale, shouldComponentUpdate life cycle method was added to the last rendering component Car. This method will lead to component updating, only if the content is available field of the car in question is updated.

## Redux store
