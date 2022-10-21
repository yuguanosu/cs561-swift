const express = require('express');
const app = express();
const port = 3000

// new API route: GET /users, returning a list of users
app.get('/data/2.5/weather', (request, response) => {
  response.json([
    {
        "coord": {
          "lon": -123.26,
          "lat": 44.56
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 293.64,
          "feels_like": 293.6,
          "temp_min": 290.45,
          "temp_max": 294.7,
          "pressure": 1021,
          "humidity": 71
        },
        "visibility": 10000,
        "wind": {
          "speed": 2.57,
          "deg": 310
        },
        "clouds": {
          "all": 75
        },
        "dt": 1664489376,
        "sys": {
          "type": 2,
          "id": 2040223,
          "country": "US",
          "sunrise": 1664460511,
          "sunset": 1664503079
        },
        "timezone": -25200,
        "id": 5720727,
        "name": "Corvallis",
        "cod": 200
      }
  ]);
});

// DELETE user
app.delete('/data/2.5/weather', (request, response) => {
  response.json({ result: 'success' });
});

app.listen(3000, () => {});