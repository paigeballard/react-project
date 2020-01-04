import React, { Component } from 'react'
import { cardInfo } from './data'

const InfoContext = React.createContext()

class CardContext extends Component {
    state = {
        info: cardInfo
    }

    getItem = id => {
        const item = this.state.info.find(item => item.id === id)
        return item;
    } 

    handleDetail = id => {
        const item = this.getItem(id)
        this.setState(() => {
            return {
                detailInfo: item
            } 
        }) 
    } 

  render () {
    return (
     <InfoContext.Provider value={{
          info: this.state.info
      }}>
        {this.props.children}
      </InfoContext.Provider>
    )
  }
}

const InfoConsumer = InfoContext.Consumer

export { CardContext, InfoConsumer }
