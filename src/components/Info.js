import React, { Component } from 'react'
import { InfoConsumer } from './contexts'
import { Link } from 'react-router-dom'
// import InfoCard from './Infocard'

class Info extends Component {
  render () {
    return (
      <InfoConsumer>
        {value => {
          console.log('value', value.info)
          return value.info.map((item) => {
            return (
              this.newMethod(item)
            )
          })
        }}
      </InfoConsumer>
    )
  }

  newMethod (item) {
    console.log(item.logo)
    return <div className='col-10 col-lg-4 mx-auto mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <div className='card-header'>
        <h3 className='card-title text-uppercase'>{item.day}</h3>
          <img src={item.logo} alt={item.day} className='card-img-top' />
        </div> 
        <div className='card-body'>
          {/* <h3 className='card-title text-uppercase'>{item.day}</h3> */}
          <h5 className='card-title'>{item.description}</h5>
        </div>
        <Link className='btn btn-secondary' to='/restaurant'>Menu</Link>
      </div>
    </div>
  } 
} 

export default Info
