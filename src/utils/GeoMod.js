const request = require('request');
require('dotenv').config();

const geoAPI_key = process.env.geoAPI_key;

const geocode = (Address,Callback) => {
    Address = encodeURIComponent(Address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${Address}.json?limit=1&access_token=${geoAPI_key}`;
    
    request(
        { url, json: true },
        (error, { body } = {} ) => {
            if(error){
                Callback('Unable to Connect to Location Service', undefined);
            }
            else if(body.features[0] === undefined){
                Callback('Unable to find location. Try a different search',undefined);
            }
            else {
                Callback(
                    undefined, 
                    {
                        place: body.features[0].place_name,
                        lat: body.features[0].center[1],
                        lon: body.features[0].center[0]
                    }
                );
            }
        }
    );
}

module.exports = {geocode}




