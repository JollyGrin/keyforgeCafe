import fetch from 'axios'

const getCity = async (lat, long) => {
  const parsed = `/api/location?lat=${lat}&long=${long}`

  const result = await fetch(parsed)
  return result.data
}

const getGeo = async query => {
  const parsed = `api/location?location=${query}`

  const result = await fetch(parsed)
  return result
}

const getLocation = () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      const options = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
  } else {
    return new Promise(resolve => resolve({}))
  }
}

export { getCity, getGeo, getLocation }
