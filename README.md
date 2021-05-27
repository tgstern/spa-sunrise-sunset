# Sunrise Sunset Application


React application that takes in 5 pairs of latitude/longitude coordinates and loads times of sunrise and sunset.

To use the application, find 5 locations you want to check and get the latitude and longitude values. Once you have entered all 5 pairs, the application will make the calls to a third-party API and display the results in the order entered.

Front end validation is included to ensure latitude/longitude values are numbers and in the correct range.

Pulls data from [Sunrise-Sunset API](https://sunrise-sunset.org/api). Known issue: this API has an issue handling a value of 0, so latitude or longitude of 0 degrees will not work correctly.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
