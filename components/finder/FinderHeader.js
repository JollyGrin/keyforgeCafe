import React, { Component, Fragment } from 'react'
import { getEvents, getGeocode } from '../../lib/event'

export default class FinderHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      compass: false,
      placeholder: 'Search by City, Country',
      search: '',
      getStoreClick: false
    }
  }

  compassClick = () => {
    const { currentState } = this.props
    let placeholder = `${currentState.coords.city}, ${currentState.coords.country}`
    this.setState({ placeholder: placeholder })
  }

  getStoresClick = () => {
    const { coords } = this.props.currentState
    const { getEvents, getGeo } = this.props

    // nothing in search & no lat/long? ask them to search
    if (!this.state.search) {
      getEvents()
      this.setState({ getStoreClick: true })
    }

    if (this.state.search) {
      console.log(this.state.search)
      const geo = getGeo(this.state.search)
      console.log('RESULTS GEO', geo)
      this.setState({ getStoreClick: true })
    }

    // have lat/long? get city > display in search > query api w/ lat/long
    // search bar filled? getGeo > query api w/ lat/long
  }

  // componentDidMount () {

  // }

  render () {
    return (
      <Fragment>
        <section className='hero wood-background'>
          <div className='hero-body'>
            {/* <div className='container'>
            </div> */}
            <div className='columns'>
              <div className='column is-3 is-hidden-touch'>
                <img className='aember1' src='static/media/aember1.png' />
              </div>
              <div className='column is-6'>
                <h1 className='title bigger'>Find Keyforge Events</h1>
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
                      disabled={!this.state.getStoreClick ? false : true}
                    />
                  </div>
                </div>
                <div className='level'>
                  <div className='level-left'>
                    <div className='level-item'>
                      <a
                        onClick={this.compassClick}
                        // onMouseEnter={this.compassHover}
                        // onMouseLeave={this.compassHover}
                        className='button compass is-large is-fullwidth'
                        disabled={!this.state.getStoreClick ? false : true}
                      >
                        <i
                          className={`${
                            this.state.compass ? 'fas' : 'far'
                          } fa-compass`}
                        ></i>{' '}
                        Get Your Location
                      </a>
                    </div>
                  </div>
                  <div className='level-right'>
                    <div className='level-item'>
                      <a
                        onClick={this.getStoresClick}
                        className='button getstores is-large is-fullwidth'
                        disabled={this.state.getStoreClick ? true : ''}
                      >
                        {!this.state.getStoreClick
                          ? 'Get Events'
                          : 'Refresh Page'}
                      </a>
                      <br />
                      <span className='help'>
                        {/* GeoCode: {this.props.lat}, {this.props.long} */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='column is-3 is-hidden-touch'>
                <img className='aember2' src='static/media/aember2.png' />
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .aember1 {
            position: relative;
            top: 20vh;
          }

          .aember2 {
            position: relative;
            top: 0;
          }

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

          .fa-compass {
            margin-right: 1rem;
          }

          input,
          textarea {
            box-shadow: inset 0 10px 20px rgba(10, 10, 10, 0.1);
          }

          .button {
            background: #f2cc72;
            border: transparent;
          }

          .button:hover {
            background: #e8953d;
          }

          .button.compass {
            background: transparent;
            color: #f2cc72;
            border: transparent;
          }
          .button:hover .compass {
            background: transparent;
          }

          .title.bigger {
            font-size: 2.4em;
            color: #f2cc72;
          }
        `}</style>
      </Fragment>
    )
  }
}
