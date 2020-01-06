import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

class Card extends React.Component {
  componentDidMount () { console.log(this.props) }
  render () {
    return <div className='col-md-2 mb-2 d-flex align-items-stretch'>
      <div className='card' style={{ width: '18rem' }}>
        <div className='view'>
          <img src={this.props.logo} alt={this.props.day} className='card-img-top' />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{this.props.day}</h5>
          <h5 className='card-text'>{this.props.date}</h5>
          <h5 className='card-text'>{this.props.description}</h5>
        </div>
        <div className='card-footer'>
          <Link className='btn btn-primary' to={`/restaurant/${this.props.id}`}>Menu</Link>
        </div>
      </div>
           </div>
  }
}

export default Card
