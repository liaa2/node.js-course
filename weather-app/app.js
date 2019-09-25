const request = require('request');
const API_KEY = require('./weather.config');

const url = `https://api.darksky.net/forecast/${API_KEY}/37.8267,-122.4233`;

request({ url }, (error, response) => {
  // console.log(response);
  const data = JSON.parse(response.body);
  console.log(data.currently);
});