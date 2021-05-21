# Sunrise Sunset Application
<<<<<<< HEAD

React application that takes in 5 pairs of latitude/longitude coordinates and loads times of sunrise and sunset.

To use the application, find 5 locations you want to check and get the latitude and longitude values. Once you have entered all 5 pairs, the application will make the calls to a third-party API and display the results in the order entered.

Front end validation is included to ensure latitude/longitude values are numbers and in the correct range.

Pulls data from [Sunrise-Sunset API](https://sunrise-sunset.org/api). Known issue: this API has an issue handling a value of 0, so latitude or longitude of 0 degrees will not work correctly.
=======
>>>>>>> c83428f34cda73daf176901cb68865eca02571c2

React application that takes in 5 pairs of latitude/longitude coordinates and loads times of sunrise and sunset.

To use the application, find 5 locations you want to check and get the latitude and longitude values. Enter 
the values into the appropriate fields and click "Next." Once you have entered all 5 pairs, the application
will make the calls to a third-party API and display the results in the order entered.

There are built-in checks on the values of the coordinates entered, and it will not call the API if the values 
are not numbers or if they are not in the necessary range (-90 to 90 for latitude, -180 to 180 for longitude). 
There is an additional error handler if something else fails on the API call.

Test the application with known real coordinates as well as impossible coordinates or non-number values to see
the different results. All sunrise/sunset times are displayed on the current date and in UTC.

<<<<<<< HEAD
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
=======
Pulls data from [Sunrise-Sunset API](https://sunrise-sunset.org/api).
Known issue: this API has an issue handling a value of 0, so latitude or longitude of 0 degrees will not 
work correctly.
>>>>>>> c83428f34cda73daf176901cb68865eca02571c2
