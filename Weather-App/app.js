const request = require('postman-request');

//Weather
/* const weather_url = "http://api.weatherstack.com/current?access_key=3920b29c3ecb693b904c073e28a23683&query=Bengaluru";

//Request accepts two parameters. 1) The API options in the form of an object. 2) A callback function to work on the data received from the response to the request.
request(
    {
        url:weather_url, 
        json:true     
    },(error,response)=> {
        if(error){
            console.log("Unable to connect to the weather service. Check your network or the URL")
        }
        else if(response.body.error){
            console.log("Unable to find the location")
        }
        else{
            const data = response.body.current;
            console.log(`It is currently ${data.temperature}. It feels like ${data.feelslike} degrees out.`)
            console.log(response);
        }
}); */

//Geocoding
const map_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1Ijoic2FoaWxyayIsImEiOiJja3BkdTR1ZHgwYTJjMm9vMWFqaXN6NWtlIn0.haVSarijEz0glyWBduj8bQ&limit=1"

request(
    {
        url: map_url,
        json: true
    },(error,response) =>{
        if(error){
            console.log("Unable to connect to the geocoding service. Check your network or the URL")
        }
        else if(response.body.features.length === 0){
            console.log("Unable to get location coordinates for the specified location")
        }
        else{
            const data = response.body.features[0];
            const latitude = data.center[1];
            const longitude = data.center[0];
            console.log(`Latitude is ${latitude} and Longitude is ${longitude}`);
        }
    }
);