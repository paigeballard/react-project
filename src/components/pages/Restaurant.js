import React from 'react'
import { cardInfo } from '../data'
import { Link } from 'react-router-dom'


class Restaurant extends React.Component {
  state = {id:''}
  
  componentWillMount() {
    this.setState({
      id: this.props.match.params.id
    })
  }

  buildMenu = (cardInfo) => {
    var result = cardInfo.find( (obj) => {
      return obj.id === parseInt(this.state.id)
    })
    return result
  }

  render () {
    const menu = this.buildMenu(cardInfo)
    console.log(menu)
    return (
      <div>
        <div className='wrapper'>
          <div className='mainRestaurant'>
          <h3>{menu.day}</h3>
        <h1>{menu.name}</h1>
        {menu.todaysMenu.map(item => {
          return <div>
            <ul>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            </ul>
          </div>
        })}
          </div>
        <div className='sidebarTwo'>
          <h1>Want to order Jasons Deli instead?</h1>
          <h5>Follow the link bellow to submit your order.</h5>
          <Link to='/jasons'>Jason's Deli</Link>
        </div>
        </div>
      </div>
    )
  }
}


export default Restaurant


     

