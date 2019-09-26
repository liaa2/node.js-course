const request = require('request');
const { DARK_SKY_API_KEY, MAP_BOX_API_KEY } = require('./weather.config');
const geocode = require('./utils/geocode');

// const url = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/37.8267,-122.4233?units=si`;

// request({ url, json: true }, (error, response) => {
//   if(error) {
//     console.log('Unable to connect to weather service.');
//   } else if (response.body.error) {
//     console.log(response.body.error);
//   } else {
//     const data = response.body.currently;
//     console.log(`It is currently ${data.temperature} degrees out. There is a ${data.precipProbability}% chance of rain.`);
//   }
// });

// Geocoding
// Address -> Lat/Long -> Weather
// const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${MAP_BOX_API_KEY}&limit=1`;

// request({ url: geoURL, json: true }, (error, response) => {
//   if(error) {
//     console.log('Unable to connect to mapbox.');
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search.');
//   } else {
//     console.log('lat: ', response.body.features[0].center[1]);
//     console.log('long: ', response.body.features[0].center[0]);
//   }
// });



geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('data', data);
});
