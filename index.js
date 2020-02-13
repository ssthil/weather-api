// index.js

/**
 * Required External Modules
 */
const express = require('express');
const path = require('path');
const axios = require('axios');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || '8000';
/**
 *  App Configuration
 */
const openWeatherApiURL = 'http://api.openweathermap.org/data/2.5/weather';
const appid = 'ed973fdb30d0fffb8da125f32e7c1f25';

app.use(express.json());

/**
 * Routes Definitions
 */
app.get('/', async (req, res) => {
  const cityName = req.query.city || 'brussels';
  // @ts-ignore
  const response = await axios.get(
    `${openWeatherApiURL}?q=${cityName}&appid=${appid}&units=metric`
  );
  res.status(200).send({ data: response.data });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on htpp://localhost:${port}`);
});
