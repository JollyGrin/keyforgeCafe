import React, { Component, Fragment } from 'react';

export default class Match extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <span className="help is-pulled-right">
            <strong>October 2, 2019</strong>
          </span>
        </div>
        <br />
        <div className="box">
          <div className="columns is-vcentered">
            <div className="column is-2">
              <a href="https://www.twitch.tv/videos/489285366">
                <img src="static/media/thumb.png" />
              </a>
            </div>
            <div className="column">
              <span className="title">
                <i className="fas fa-crown"></i> MrBlockchain
              </span>
              <br /> <br />
              <span>
                <i className="fas fa-book"></i>
                <a href="https://www.thecrucibletracker.com/games/41e02720-e534-11e9-8e02-4f62a4e1cd02/log">
                  Aphidleshy, He who Farms the Valley
                </a>
              </span>
            </div>
            <div className="column">
              <span className="title">JollyGrin</span>
              <br /> <br />
              <span>
                <i className="fas fa-book"></i>{' '}
                <a href="https://www.thecrucibletracker.com/games/41e02720-e534-11e9-8e02-4f62a4e1cd02/log">
                  The Wounding Sensei
                </a>
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
