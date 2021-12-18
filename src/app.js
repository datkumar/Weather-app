const path = require('path');
const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
const request = require('request');
const myApp = express();

// root path for files used by the html/hbs
const htmlFolderPath = path.join(__dirname, '../public/')
myApp.use(express.static(htmlFolderPath))

myApp.set('view engine', 'hbs');

const viewsFolderPath = path.join(__dirname, '../templates/views/');
myApp.set('views', viewsFolderPath)


const partialsFolderPath = path.join(__dirname, '../templates/partials/');
hbs.registerPartials(partialsFolderPath);


const GeoMod = require('./utils/GeoMod');
const WeatherMod = require('./utils/WeatherMod');

myApp.get('', (req, resp) => {
    resp.render('index', {
        title: 'Weather',
        author: 'Kumar D.'
    })
});


myApp.get('/weather', (req, resp) => {
    if (!req.query.address) {
        return resp.send({
            error: 'Must provide address'
        });
    }

    const address = req.query.address;
    GeoMod.geocode(address, (error, { place, lat, lon } = {}) => {
        if (error) {
            return resp.send({ error });
        }
        WeatherMod.forecast(lat, lon, (error, { desc, temperature } = {}) => {
            if (error) {
                return resp.send({ error });
            }
            resp.send({
                place, lat, lon, desc,
                temp: temperature
            });
        });
    });
});


myApp.get('*', (req, resp) => {
    resp.render('404', {
        errorMessage: 'Page not found'
    });
});

myApp.listen(3000, () => {
    console.log('Server is up on Port 3000');
});

