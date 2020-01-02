import React, { Component } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from './components/Pagination'
import Navbar from './components/layouts/Navbar'
// react router import
import { Switch, Route } from 'react-router-dom'
// import pages
import Home from './components/pages/Home'
import Jasons from './components/pages/Jasons'
import NotFoundPage from './components/pages/NotFoundPage'
import Restaurant from './components/pages/Restaurant'
import MyCal from './components/pages/Calendar'
import fire from './config/Fire'
import Login from './components/pages/Login'

class App extends Component {
  constructor () {
    super()
    this.state = ({
      user: null,
      currentPage: [1],
      cardsPerPage: [5]
    })
    this.authListner = this.authListner.bind(this)
  }

  componentDidMount () {
    this.authListner()
  }

  authListner () {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.setState({ user })
        localStorage.setItem('user', user.uid)
      } else {
        this.setState({ user: null })
        localStorage.removeItem('user')
      }
    })
  }

  // indexOfLastCards = currentPage * cardsPerPage
  // indexOfFirstCard = indexOfLastCards - cardsPerPage
  // currentPage = cards.slice(this.indexOfFirstCard, this.indexOfLastCards)

  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/calendar' component={MyCal} />
          <Route path='/jasons' component={Jasons} />
          <Route path='/restaurant/:id' component={Restaurant} />
          <Route component={NotFoundPage} />
        </Switch>
        <Pagination CardsPerPage totalCards />
      </div>
    )
  }
}

export default App
