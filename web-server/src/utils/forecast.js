const { DARK_SKY_API_KEY } = require('../../../weather-app/weather.config');
const request = require('request');


const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if(error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, `It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast;