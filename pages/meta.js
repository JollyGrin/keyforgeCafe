import React, { Component } from 'react'
import TheHead from '../components/TheHead'
import DeckLists from '../components/DeckLists'
import Airtable from 'airtable'
import { getResults } from '../lib/db'

export default class meta extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'hello',
      records: [],
      raw: ''
    }
  }

  componentDidMount () {
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: 'keyBj1QK7piMXmdoF'
    })

    const base = Airtable.base('appXfwNirfyLrYXkv')
    let acc = []

    base('Decks')
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 5,
        view: 'Grid view'
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err)
          return
        }
        records.forEach(record => {
          console.log(record)
          const { DeckURL } = record.fields
          //   debugger;
          acc.push(DeckURL)
          this.setState({ raw: records })
        })
        this.setState({ records: acc })
      })
  }
  render () {
    return (
      <div>
        <TheHead />
        <div className='section'>
          <div className='columns'>
            <div className='column is-8 is-offset-2'>
              <DeckLists decks={this.state.raw} />
            </div>
          </div>
        </div>

        <style jsx>{`
          .title,
          .subtitle {
            color: black;
          }
        `}</style>
      </div>
    )
  }
}
