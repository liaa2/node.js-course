const request = require('request');
const { MAP_BOX_API_KEY } = require('../weather.config');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${MAP_BOX_API_KEY}&limit=1`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('unable to connect to location services!', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[1],
        long: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
}

module.exports = geocode;