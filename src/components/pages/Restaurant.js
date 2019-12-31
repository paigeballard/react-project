import React from 'react'
import { cardInfo } from '../data'


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
    // this.data(this.state.id)
    // console.log( this.data(this.state.id))
    return (
      <div>
  <p>{menu.day} {menu.date}</p>
        <p>{menu.name}</p>
        <p>{menu.description}</p>
        {menu.todaysMenu.map(item => {
          return <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        })}
      </div>
    )
  }
}


export default Restaurant


     

