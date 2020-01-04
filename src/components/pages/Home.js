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
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      )
    })

    return (
      <div className='container'>
        <div className='row mt-5'>
          {renderCurrentCards}
        </div>
        <ul>
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}

export default Home
