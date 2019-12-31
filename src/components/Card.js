import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component {
  componentDidMount () { console.log(this.props) }
  render () {
    return <div className='col-10 col-lg-4 mx-auto mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <div className='card-header'>
          <img src={this.props.logo} alt={this.props.day} className='card-img-top' />
        </div>
        <div className='card-body'>
          <h3 className='card-title text-uppercase'>{this.props.day}</h3>
          <h5 className='card-title'>{this.props.date}</h5>
          {/* <h3 className='card-title text-uppercase'>{item.day}</h3> */}
          <h5 className='card-title'>{this.props.description}</h5>
        </div>
        <Link className='btn btn-secondary' to={`/restaurant/${this.props.id}`}>Menu</Link>
      </div>
    </div>
  }
}

export default Card
