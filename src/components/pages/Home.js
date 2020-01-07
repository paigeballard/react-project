import React, { Component } from 'react'
import { cardInfo } from '../data'
import Card from '../Card'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      cardInfo,
      currentPage: 1,
      cardsPerPage: 5
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render () {
    const { cardInfo, currentPage, cardsPerPage } = this.state

    const indexOfLastCards = currentPage * cardsPerPage
    const indexOfFirstCards = indexOfLastCards - cardsPerPage
    const currentCards = cardInfo.slice(indexOfFirstCards, indexOfLastCards)

    const renderCurrentCards = currentCards.map((item, index) => {
      return <Card key={index} {...item} />
    })

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(cardInfo.length / cardsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button 
          className='btn btn-default'
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      )
    })

    return (
      <div className='Site'>
        <div className='Site-content'>
          <div className='container'>
            <div className='row mt-5'>
              {renderCurrentCards}
            </div>
            <div>
              {renderPageNumbers}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
