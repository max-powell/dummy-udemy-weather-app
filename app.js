const request = require('request')

const geocode = require('./utils/geocode')

const darkskyUrl = 'https://api.darksky.net/forecast/5fb197eebdeaf31dd8b2052e84c742c9/37.8267,-122.4233?units=si'

// request({url: darkskyUrl, json: true}, (err, {body}) => {
//   if (err) {
//     console.log('Unable to connect to weather service')
//   } else if (body.error) {
//     log(body.error)
//   } else {
//     console.log(body.daily.data[0].summary)
//     console.log(`It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability * 100}% chance of rain.`);
//   }
// })

geocode('kt22 0dj', (err, data) => {
  console.log('Error: ', err)
  console.log('Data: ', data)
})
