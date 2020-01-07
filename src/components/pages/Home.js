import React, { Component } from 'react'
import { cardInfo } from '../data'
import Card from '../Card'
// import styled from 'styled-components'

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
      <div className='header'>
        {/* <h1>Welcome to the cPanel Lunch Order App</h1>
        <h4>Take a look at this weeks lunch lineup, if nothing suits you order from Jason's Deli</h4> */}
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
      </div>
    )
  }
}

export default Home

// const HeaderDetails = styled.header`
// background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
// height: 100vh;
// text-ailgn: center;
// // color: var(--mainWhite);

// h1 {
//   padding-top: 3%;
//   color: var(--mainDark);
// //   text-align: center;
// // }

// // h4 {
// //   color: var(--mainDark)
// //   text-align: center;
// // }

