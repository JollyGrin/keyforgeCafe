import React, { Component, Fragment } from 'react'
import FinderEventTile from './FinderEventTile'

export default class Column extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Fragment>
        {this.props.data.map((event, i) => (
          <div className='column is-4' key={i}>
            {/* {console.log(vid)} */}
            <FinderEventTile key={i} data={event} />
          </div>
        ))}
      </Fragment>
    )
  }
}
