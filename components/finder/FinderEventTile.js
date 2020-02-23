import React, { Component, Fragment } from 'react'
import moment from 'moment'

export default class FinderEventTile extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  daysFromNow = () => {
    if (this.state.date_start) {
      const eventDate = moment(this.state.date_start)

      const daysDiff = eventDate.fromNow()
      return daysDiff
    }
  }

  // load the individual event and set state with it
  componentDidMount () {
    const {
      id,
      name,
      description,
      date_start,
      link,
      registration_link,
      address1,
      city,
      country,
      postal_code,
      lat,
      lng
    } = this.props.data

    this.setState({
      id,
      name,
      description,
      date_start,
      link,
      registration_link,
      address1,
      city,
      country,
      postal_code,
      lat,
      lng
    })
  }

  render () {
    console.log(this.state)

    return (
      <Fragment>
        <div className='card'>
          <header className='card-header'>
            {/* <span className='icon card-header-title'>
              <i className='fas fa-angle-down' aria-hidden='true'></i>
            </span> */}
            <span
              className={`tag is-light is-medium ${
                moment(this.state.date_start).isBefore()
                  ? 'is-light'
                  : 'is-success'
              }`}
            >
              {this.daysFromNow()}
            </span>

            <a
              href='#'
              className='card-header-icon'
              aria-label='more options'
            >?</a>
          </header>
          <div className='card-content'>
            <div className='is-hidden-touch event-date'>
              <span className='help'>
                {moment(this.state.date_start).format('ddd hh:mma')}
              </span>
              <h5 className='subtitle archivo'>
                {moment(this.state.date_start).format('MMM Do, YYYY')}
              </h5>
            </div>
            <div className='columns is-mobile is-vcentered'>
              <div className='column is-4 is-hidden-tablet has-centered-text'>
                <span className='help'>
                  {moment(this.state.date_start).format('ddd hh:mma')}
                </span>
                <h5 className='subtitle archivo'>
                  {moment(this.state.date_start).format('MMM Do, YYYY')}
                </h5>
              </div>
              <div className='column'>
                <div className='content'>
                  <span className='help'>
                    <a
                      href={`https://www.google.com/maps/search/${this.state.lat},+${this.state.lng}`}
                    >
                      <i className='fas fa-location-arrow'></i>{' '}
                      {this.state.city} •{this.state.address1}{' '}
                    </a>
                  </span>
                  <h5 className='subtitle'>{this.state.name}</h5>
                  <a
                    href={this.state.link}
                    className={!this.state.link ? 'disabled' : ''}
                  >
                    <span>
                      <i className='fas fa-home'></i> Store Website
                    </span>
                  </a>
                  <br />
                  <a
                    href={this.state.registration_link}
                    className={!this.state.registration_link ? 'disabled' : ''}
                  >
                    {console.log(
                      !this.state.registration_link
                        ? 'NO LINK'
                        : this.state.registration_link
                    )}
                    <span>
                      <i className='fas fa-calendar-day'></i> Event Link
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <footer className='card-footer is-hidden-tablet'>
            <a
              href={`https://www.google.com/maps/search/${this.state.lat},+${this.state.lng}`}
              className='card-footer-item'
            >
              <i className='fas fa-location-arrow'></i>
            </a>
            <a
              href={this.state.link}
              className={`card-footer-item ${
                !this.state.link ? 'disabled' : ''
              }`}
            >
              <i className='fas fa-home'></i>
            </a>
            <a
              href={this.state.registration_link}
              className={`card-footer-item ${
                !this.state.registration_link ? 'disabled' : ''
              }`}
            >
              <i className='fas fa-calendar-day'></i>
            </a>
          </footer>
        </div>
        <style jsx>{`
          a.disabled {
            color: grey !important;
            cursor: not-allowed;
            opacity: 0.5;
            text-decoration: none;
          }

          .tag {
            position: absolute;
             top: 0;
            right: 0;
            margin-top: -0.5rem;
            margin-right: -0.5rem;
            // margin-bottom: -1em;
          }

          .event-date {
            margin-top: -1rem;
            margin-bottom: 1rem;
          }

          .card {
            border-radius: 5px;
          }

          .card-header {
            box-shadow: 0 0 0 rgba(10, 10, 10, 0) !important;
          }

          .fa-angle-down {
            font-size: 1.5rem;
            opacity: 0.3;
          }

          .archivo {
            font-family: 'Archivo Black', sans-serif !important;
            // font-size: 2.4em;
            // color: #f2cc72;
          }
        `}</style>
      </Fragment>
    )
  }
}
