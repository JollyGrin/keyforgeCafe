import React, { Component } from 'react'
import TheHead from '../components/TheHead'
import EventHeader from '../components/EventHeader'
import { getEvents, getGeocode } from '../lib/event'
import moment from 'moment'

export default class events extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      events: [],
      lat: '',
      long: '',
      stores: {
        count: '',
        results: []
      }
    }
  }

  getLocation = () => {
    console.log('Getting Location...')
    navigator.geolocation.getCurrentPosition(
      position => {
        const { coords } = position
        this.setState({ lat: coords.latitude, long: coords.longitude })
        console.log('latlong', this.state.lat, this.state.long)
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  findLocation = searchBar => {
    getGeocode(searchBar).then(obj => {
      console.log('geocode:', obj)

      let { lat, lng } = obj.data.results[0].geometry
      console.log('ll:', lat, lng)

      this.setState({ lat: lat, long: lng })
      this.getStores()
    })
  }

  parseTime = time => {
    const date = moment(time)
    console.log(date._d)
  }

  getStores = () => {
    // if (this.state.lat) {
    const latlong = `${this.state.lat},${this.state.long}`
    let storesWithEvents = []

    getEvents(latlong, 50).then(obj => {
      this.setState({ stores: obj.data })

      // getting events of stores
      console.log('stores: ', this.state.stores)
      let { results } = obj.data
      console.log('res', results)

      const withEvents = results.filter(store => {
        if (store.events.length > 0) {
          console.log('has event:', store)
          return store
        }
      })

      withEvents.forEach(store => {
        storesWithEvents = [...storesWithEvents, ...store.events]
      })
      console.log('swe', storesWithEvents)

      this.setState({ events: storesWithEvents })
    })

    // } else {
    //   console.log('coords not logged yet')
    // }
  }

  componentDidMount () {}

  render () {
    return (
      <div>
        <TheHead />
        <EventHeader
          getLocation={this.getLocation}
          findLocation={this.findLocation}
          lat={this.state.lat}
          long={this.state.long}
          getStores={this.getStores}
          setLatLong={this.setLatLong}
        />
        <div className='section'>
          <div className='columns'>
            <div className='column is-8 is-offset-2'>
              <h1 className='title'>Events Near You</h1>

              <div className='columns'>
                <div className='column'>
                  <h1 className='title'>{this.state.stores.count} Stores</h1>
                  <ul>
                    {this.state.stores.results.map((obj, i) => (
                      <li key={i}>{obj.name}</li>
                    ))}
                  </ul>
                </div>
                <div className='column'>
                  <h1 className='title'>{this.state.events.length} Events</h1>
                  <ul>
                    {this.state.events.map((obj, i) => (
                      <li key={i}>
                        {obj.name} {this.parseTime(obj.date_start)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .title,
          .subtitle {
            color: black;
          }
        `}</style>
      </div>
    )
  }
}
