import React, { Component } from 'react'
import TheHead from '../components/TheHead'
import FinderHeader from '../components/finder/FinderHeader'
import FinderEventTile from '../components/finder/FinderEventTile'
import Column from '../components/finder/Column'
import * as geolocate from '../lib/geolocate'
import { getEvents } from '../lib/event'
import moment from 'moment'

export default class finder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      eventsCount: '',
      loadEvents: [],
      search: '',
      coords: {
        // lat: '52.354067199999996',
        // long: '4.9206148999999995',
        lat: '',
        long: '',
        city: '',
        country: ''
      }
    }
  }


  chunk = (array, size) => {
    if (array.length <= size) {
      return [array]
    }
    return [array.slice(0, size), ...this.chunk(array.slice(size), size)]
  }

  currentLocation = () => {
    // call navigator
    const promise = geolocate.getLocation()

    // unfurl the promise
    promise
      .then(pos => {
        // unfurl and set state with lat/long
        const { latitude, longitude } = pos.coords
        this.setState({
          coords: {
            lat: latitude,
            long: longitude
          }
        })
      })
      .then(res => {
        // get city from lat/ong
        this.getCity()
      })
  }

  getCity = () => {
    const { lat, long } = this.state.coords

    // query lat/long
    const newCity = geolocate.getCity(lat, long)

    // set updated city/country
    newCity.then(res => {
      console.log('newCity: res: ', res)

      this.setState({
        coords: {
          lat: lat,
          long: long,
          city: res.city,
          country: res.country
        }
      })
    })
  }

  getGeo = query => {
    // query the search field
    const newGeo = geolocate.getGeo(query)

    // set updated lat/long
    newGeo
      .then(res => {
        // unfurl & setstate with lat/long
        const { lat, lng } = res.data
        this.setState({
          coords: { lat: lat, long: lng }
        })
      })
      .then(res => {
        // verify city with new lat/long
        this.getCity()
      })
      .then(res => {
        this.getEvents()
      })
  }

  getEvents = () => {
    // grab lat/long from state, merge into lat/long
    const { lat, long } = this.state.coords
    const latlong = lat + ',' + long

    // query events with latlong
    const eventsPromise = getEvents(latlong)

    // load stores & events
    eventsPromise.then(res => {
      this.setState({ eventsCount: res.sortedEvents.length })

      const chunkedArr = this.chunk(res.sortedEvents, 3)

      this.setState({ loadEvents: chunkedArr })
    })
  }

  componentDidMount () {
    this.currentLocation()
  }

  render () {
    return (
      <div>
        <TheHead />
        <FinderHeader
          currentLocation={this.currentLocation}
          currentState={this.state}
          getCity={this.getCity}
          getEvents={this.getEvents}
          getGeo={this.getGeo}
        />
        <section className='section glow-background'>
          <div className='columns'>
            <div className='column is-8 is-offset-2'>
              <h1 className='title bigger'>
                {this.state.eventsCount} Events Near You
              </h1>

              {this.state.loadEvents.map((chunk, i) => (
                <div className='columns' key={i}>
                  <Column key={i} data={chunk} />
                </div>
              ))}
              {/* <div className='columns'>
                <div className='column is-4'>
                  <FinderEventTile />
                </div>
                <div className='column is-4'>
                  <FinderEventTile />
                </div>
                <div className='column is-4'>
                  <FinderEventTile />
                </div>
              </div>
              <div className='columns'>
                <div className='column is-4'>
                  <FinderEventTile />
                </div>
                <div className='column is-4'>
                  <FinderEventTile />
                </div>
                <div className='column is-4'>
                  <FinderEventTile />
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <style jsx>{`
          .title,
          .subtitle {
            color: #98530a;
            font-size: 2.25rem !important;
          }
        `}</style>
      </div>
    )
  }
}
