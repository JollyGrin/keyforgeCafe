import fetch from 'axios'
import getConfig from 'next/config'

const key = process.env.OCAPIKEY
const proxy = 'https://cors-anywhere.herokuapp.com/'
const apiURL = `https://api.opencagedata.com/geocode/v1/json?`

module.exports = async (req, res) => {
  console.log('req', req.query)

  try {
    if (req.query.lat && req.query.long) {
      const { lat, long } = req.query
      const latlong = `${lat},${long}`
      const query = `${apiURL}q=${latlong}&key=${key}`

      const result = await fetch(query)
      res.status(200).json(result.data.results[0].components)
    }

    if (req.query.location) {
      const { location } = req.query
      const query = `${apiURL}q=${location}&key=${key}`
      const result = await fetch(query)

      res.status(200).json(result.data.results[0].geometry)
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

// if (req.query.pw === 'deanboi')
