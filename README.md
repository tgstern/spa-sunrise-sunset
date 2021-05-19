# Sunrise Sunset Application

React application that takes in 5 pairs of latitude/longitude coordinates and loads times of sunrise and sunset.

To use the application, find 5 locations you want to check and get the latitude and longitude values. Enter 
the values into the appropriate fields and click "Next." Once you have entered all 5 pairs, the application
will make the calls to a third-party API and display the results in the order entered.

There are built-in checks on the values of the coordinates entered, and it will not call the API if the values 
are not numbers or if they are not in the necessary range (-90 to 90 for latitude, -180 to 180 for longitude). 
There is an additional error handler if something else fails on the API call.

Test the application with known real coordinates as well as impossible coordinates or non-number values to see
the different results. All sunrise/sunset times are displayed on the current date and in UTC.

Pulls data from [Sunrise-Sunset API](https://sunrise-sunset.org/api).
Known issue: this API has an issue handling a value of 0, so latitude or longitude of 0 degrees will not 
work correctly.
