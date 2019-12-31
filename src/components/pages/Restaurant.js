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
  <h3>{menu.day} {menu.date}</h3>
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
    )
  }
}


export default Restaurant


     

