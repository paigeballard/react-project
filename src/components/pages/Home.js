import React, { Component } from 'react'
import { InfoConsumer } from '../contexts'
import Info from '../Info'

class Home extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row mt-5'>

          <Info />
        </div>
      </div>
    )
  }
}

export default Home
