import React, { Component } from 'react'
import { cardInfo } from '../data'
import Card from '../Card'
import fire from '../../config/Fire'
// import Calendar from './Calendar'

class Home extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout () {
    fire.auth().signOut()
  }

  render () {
    return (
      <div className='container'>
        <div className='row mt-5'>
          {cardInfo.map(item =>
            <Card {...item} />
          )}
        </div>
        <button onClick={this.logout}>Logout</button>
        {/* <Calendar /> */}
      </div>
    )
  }
}

export default Home
