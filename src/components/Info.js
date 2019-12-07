import React, { Component } from 'react'
import { InfoConsumer } from './contexts'
import { Link } from 'react-router-dom'

class Info extends Component {
  render () {
    return (
      <InfoConsumer>
        {value => {
          return value.info.map((item) => {
            return (
              <div className='col-10 col-lg-4 mx-auto mb-5'>
                <div className='card' style={{ width: '18rem' }}>
            <div className='card-header'>{item.day}</div>
                  <div className='card-body'>
                    <h3 className='card-title text-uppercase'>{item.name}</h3>
                    <h5 className='card-title'>{item.type}</h5>
                  </div>
                  <Link className='btn btn-outline-primary text-uppercase' to='/buffet'>Menu</Link>
                  <Link className='btn btn-outline-primary text-uppercase' to='/jasons' >Order Jasons</Link>
                </div>
              </div>
            )
          })
        }}
      </InfoConsumer>
    )
  }
}

export default Info
