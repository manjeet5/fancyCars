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
 - install the dependencies in node by running "npm install"
 - in the node terminal, run 'npm run start'
 - navigate to 'http://localhost:3001/#/' and you should be able to view content
