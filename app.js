const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length === 3) {
  geocode(process.argv[2], (err, geoData) => {
    if (err) {
      return console.log(err)
    }
    forecast(geoData, (err, forecastData) => {
      if (err) {
        return console.log(err)
      }

      console.log(geoData.location)
      console.log(forecastData)
    })
  })
} else {
  console.log('Wrong number of arguments. Expected 1 argument.')
}
