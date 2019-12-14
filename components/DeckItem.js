import React, { Component, Fragment } from 'react';

export default class DeckItem extends Component {
  render() {
    // const { item } = this.props;
    console.log(this.props, 'final stage!');

    return (
      <Fragment>
        {/* <div className="box">
          <p>{this.props.item}</p>
        </div> */}
      </Fragment>
    );
  }
}
