import React, { Component } from 'react';
import DeckItem from '../components/DeckItem';

export default class DeckLists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const array = this.props.decks;
    const object = Object.assign({}, this.props.decks);

    console.log(array, 'array');
    console.log(object, 'object');

    return (
      <div>
        {/* This is supposed to loop over the records and pass it to the otehr side */}
        {/* {array.map((item, index) => (
          <DeckItem item={item} key={index} />
        ))} */}
      </div>
    );
  }
}
