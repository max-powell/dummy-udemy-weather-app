const request = require('request')

const url = 'https://api.darksky.net/forecast/5fb197eebdeaf31dd8b2052e84c742c9/37.8267,-122.4233'

request({url}, (err, res) => {
  const data = JSON.parse(res.body)
  console.log(data.currently)
})
