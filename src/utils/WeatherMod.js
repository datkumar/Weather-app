const request = require('request');
require('dotenv').config();

const weatherAPI_key = process.env.weatherAPI_key;

const forecast = (Lat, Long, Callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${weatherAPI_key}&query=${Lat},${Long}`;
    request(
        {url, json:true},
        (error, { body } = {} ) => {
            if (error) {
                console.log("Unable to Connect to Weather Service");
            }
            else if (body.error) {
                console.log('Unable to Find Location', undefined);
            }
            else {
                Callback(
                    undefined,
                    {
                        desc: body.current.weather_descriptions[0],
                        temperature: body.current.temperature,
                    }
                );
            }
        }
    );

}
module.exports = {forecast};



