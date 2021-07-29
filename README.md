# Project's description
## Structure and theming
App has been styled with styled-components package, it uses as well ThemeProvider.
Simple routing added, user can switch between 2 pages, for time being lack of Suspese and lazy-loading. 

## Data fetching
Data is fetched by default when user gets to to page as well as when user selects chosen location from Select component. By default data is being fetched using first option from locations array. By default weather for London.
## Forms
For demonstration purpose react-hook-form was used. However due to small size of the app some functionality (filtering temperatures) was implemented without support third party libraries. React-hook-form however is something what i would definitely recommend. Reduce amount of re-renders by taking adventage of non-controlled components.  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

