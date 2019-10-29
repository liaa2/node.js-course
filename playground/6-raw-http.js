const https = require('https');
const { DARK_SKY_API_KEY } = require('../weather-app/weather.config');
const url = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/40, -75`;

const request = https.request(url, (response) => {
  // console.log("response", response);
  
  let data = ''

  response.on('data', (chunk) => {
    console.log(chunk);
    data += chunk.toString();
  })

  response.on('end', () => {
    // console.log('data', data);
    const body = JSON.parse(data);
    console.log(body);
    
  })
})

request.on('error', (error) => {
  console.log("An error", error);
})

request.end();