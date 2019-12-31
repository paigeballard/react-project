import React, { Component } from 'react'
import { cardInfo } from '../data'
import Card from '../Card'
// import Calendar from './Calendar'

class Home extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row mt-5'>
          {cardInfo.map(item =>
            <Card {...item} />
          )}
        </div>
        {/* <Calendar /> */}
      </div>
    )
  }
}

export default Home
