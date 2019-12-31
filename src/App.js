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


class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/calendar' component={MyCal} />
          <Route path='/jasons' component={Jasons} />
          <Route path='/restaurant/:id' component={Restaurant} />
          <Route component={NotFoundPage} />
        </Switch>
        <Pagination postsPerPage totalPosts />
      </div>
    )
  }
}

export default App
