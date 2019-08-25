const request = require('request')

const forecast = (location, callback) => {
  const url = `https://api.darksky.net/forecast/5fb197eebdeaf31dd8b2052e84c742c9/${location.longitude},${location.latitude}?units=si`

  request({url, json: true}, (err, res) => {
    if (err) {
      callback('Unable to connect to weather services', undefined)
    } else if (res.body.error) {
      callback('Bad request. Please try again.', undefined)
    } else {
      callback(undefined, `${res.body.daily.data[0].summary} It is currently ${res.body.currently.temperature} degrees out. There is a ${res.body.currently.precipProbability * 100}% chance of rain.`)
    }
  })
}

module.exports = forecast
