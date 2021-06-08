const geocode = require('./utils/geocode.js');
const weather = require('./utils/forecast');

//Geocoding function

const city = process.argv[2];
geocode.getLocationDetails(city,(geocodeError,geocodeData) => {
    if(geocodeError){
        //if there is an error here, the function returns back from this point and the execution stops
        return console.log('Error',geocodeError);
    }

    weather.getWeatherDetails(geocodeData.location,(forecastError,forecastData) => {
        if(forecastError){
            return console.log('Error',forecastError);
        }

        console.log('Message from Geocode',geocodeData.message);
        console.log('Location is',geocodeData.location);        
        console.log('Message from Forecast',forecastData.message);
    });
})
