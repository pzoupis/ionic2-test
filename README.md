# Ionic2 Test

This is an ionic 2 project that it's primary functionality is to show today's weather and a five day weather forecast.

The app uses Open Weather Map API to get the weather data and Google's Places Autocomplete web service to get city predictions on user input.

### Features
* 5 day forecast
* Works for any city
* Favorite cities

### Preview the app
You can preview the app with [Ionic View](http://view.ionic.io/) using APP ID
```
54106411
```

### How to build
#### Frameworks
To build the app you need
* ionic 2 and cordova
```
$ npm install -g ionic cordova
```
* Cordova Geolocation plugin
```
$ ionic plugin add cordova-plugin-geolocation
```
#### API keys
You also need API keys from
* [Open Weather Map](http://openweathermap.org) and add it to:
```
myBlank\src\providers\weather-service.ts
```
* [Google Places API Web Service](https://developers.google.com/places/web-service/autocomplete) and add it to:
```
myBlank\src\providers\autocomplete-service.ts
```
### The source code
1. Clone the repository
```
$ git clone https://github.com/pzoupis/ionic2-test.git
```
2. Change directory
```
$ cd myBlank
```
3. Install modules
```
$ npm install
```
4. Run in browser
```
$ ionic lab
```

#### Extra notes
To run the app on a device you don't need the CORS request. So you have to edit the files below and add the full url:
src/providers/autocomplete-service.ts
```diff
- /weather-service
+ http://api.openweathermap.org
```
src/providers/weather-service.ts
```diff
- /autocomplete-service
+ https://maps.googleapis.com
```
