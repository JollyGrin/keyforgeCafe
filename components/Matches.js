import React, { Component, Fragment } from 'react';
import Match from './Match';

export default class Matches extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {console.log(this.props)}
        <div className="content">
          <center>
            <p className="title">Browse Recently Streamed Matches</p>
          </center>
        </div>
        <div>
          <Match />
        </div>

        <style jsx>{`
          .title {
            color: #98530a;
          }
        `}</style>
      </Fragment>
    );
  }
}
