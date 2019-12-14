import React, { Component, Fragment } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Keyforge.Cafe</strong> by{' '}
              <a href="https://dean.lol">dean</a> with 🍻
            </p>
          </div>
        </footer>
      </Fragment>
    );
  }
}
