import React, { Component } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Jasons from './components/pages/Jasons'
import NotFoundPage from './components/pages/NotFoundPage'
import Restaurant from './components/pages/Restaurant'
import MyCal from './components/pages/Calendar'


class App extends Component {
  constructor () {
    super()
    this.state = ({
      user: null
    })
  }

  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={Home} />
          <Route path='/calendar' component={MyCal} />
          <Route path='/jasons' component={Jasons} />
          <Route path='/restaurant/:id' component={Restaurant} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default App
