import fetch from 'axios'
import moment from 'moment'
const Moment = require('moment')

const getEvents = async latlong => {

  const query = `?latlong=${latlong}`
  const res = await fetch.get(`/api/stores${query}`)

  console.log('API RES', res)

  // prepare payload
  let payload = {}
  payload.withEvents = []
  payload.withoutEvents = []
  payload.events = []
  payload.sortedEvents = []

  const { count, results } = res.data

  console.log('API RESULTS', results)

  // filter stores with events
  const withEvents = results.filter(store => {
    if (store.events.length > 0) {
      // console.log('has event:', store)
      return store
    }
  })

  // filter stores without events
  const withoutEvents = results.filter(store => {
    if (store.events.length === 0) {
      // console.log('no event:', store)
      return store
    }
  })

  // load payload withEvents
  withEvents.forEach(store => {
    payload.withEvents = [...payload.withEvents, store]
  })

  // load payload withoutEvents
  withoutEvents.forEach(store => {
    payload.withoutEvents = [...payload.withoutEvents, store]
  })

  // load events within payload.withEvents
  payload.withEvents.forEach(store => {
    payload.events = [...payload.events, ...store.events]
  })

  // load sortedEvents
  payload.sortedEvents = payload.events.sort((a, b) => {
    // convert to unix
    const x = new Moment(a.date_start).format('X')
    const z = new Moment(b.date_start).format('X')

    // sort
    return x - z
  })

  return payload
}

const getGeocode = async location => {
  const res = await fetch(`${proxy}https://api.opencagedata.com/geocode/v1/json?q=${location}&key=9368cd90f596438c89fd2ba25710c7ae
    `)
  return res
}

export { getEvents, getGeocode }
