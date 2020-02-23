import React, { Component, Fragment } from 'react'
import { getEvents, getGeocode } from '../lib/event'

export default class EventHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      compass: false,
      placeholder: '',
      search: ''
    }
  }

  compassHover = () => {
    let { compass } = this.state
    if (compass) {
      this.setState({ compass: false })
    } else {
      this.setState({ compass: true })
    }
  }

  compassClick = () => {
    this.refs.searchBarField.value = ''
    this.props.getLocation()
    let { lat, long } = this.props
    let latlong = `${lat}, ${long}`
    console.log('latlong', latlong)
    getGeocode(latlong).then(obj => {
      let { city, country } = obj.data.results[0].components
      this.setState({ placeholder: `${city}, ${country}` })
    })
  }

  passSearch = () => {
    if (this.state.search !== '') {
      this.props.findLocation(this.state.search)
    } else {
      this.props.getStores()
    }
  }

  componentDidMount () {
    this.setState({ placeholder: 'Search you city' })
    this.props.getLocation()
  }

  render () {
    return (
      <Fragment>
        <section className='hero'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>Find Keyforge Events</h1>
              <br />
            </div>
            <div className='columns'>
              <div className='column is-6 is-offset-3'>
                <div className='field has-addons'>
                  <div className='control is-expanded'>
                    <input
                      onChange={e => {
                        this.setState({ search: e.target.value })
                      }}
                      className='input'
                      type='text'
                      ref='searchBarField'
                      placeholder={this.state.placeholder}
                    />
                  </div>
                  <div className='control'>
                    <a
                      onClick={this.compassClick}
                      onMouseEnter={this.compassHover}
                      onMouseLeave={this.compassHover}
                      className='button compass'
                    >
                      <i
                        className={`${
                          this.state.compass ? 'fas' : 'far'
                        } fa-compass`}
                      ></i>
                    </a>
                  </div>
                </div>
                <div className='container has-text-centered'>
                  <a
                    onClick={this.passSearch}
                    className='button getstores is-large is-fullwidth'
                  >
                    Get Stores
                  </a>
                  <br />
                  <span className='help'>
                    GeoCode: {this.props.lat}, {this.props.long}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          input {
            background: none;
            border-bottom: 3px solid #c1721e;
            border-top: none;
            border-left: none;
            border-right: none;
            color: #f2cc72;
            font-size: 1.4em;
          }
          input:focus {
            border-color: #f2cc72 !important;
          }
          input:hover {
            border-color: #f2cc72 !important;
          }

          i .fas {
            margin-bottom: 0.5em;
          }

          .button {
            background: #f2cc72;
            border: transparent;
          }

          .button:hover {
            background: #e8953d;
          }

          .button.compass {
            font-size: 1.4em;
            background: transparent;
            color: #f2cc72;
            border: transparent;
          }
          .button:hover .compass {
            background: transparent;
          }
        `}</style>
      </Fragment>
    )
  }
}
