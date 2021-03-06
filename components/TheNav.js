import React, { Component, Fragment } from 'react';

export default class TheNav extends Component {
  render() {
    return (
      <Fragment>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="static/media/kfcafe.svg" width="80" height="40" />
            </a>

            {/* <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> */}
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <span className="navbar-item">
                <strong>KeyForge.Cafe</strong>
              </span>

              {/* <a className="navbar-item">Documentation</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
        <style jsx>{`
          .navbar-item img {
            max-height: 2.5rem;
          }

          .navbar-item,
          .navbar-link {
            color: white;
          }
          .navbar-item,
          span strong {
            color: white;
          }

          .navbar-dropdown .navbar-item {
            color: #98530a;
          }
        `}</style>
      </Fragment>
    );
  }
}
