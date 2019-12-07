import React, { Component } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar'
// react router import
import { Switch, Route } from 'react-router-dom'
// import pages
import Home from './components/pages/Home'
import Buffet from './components/pages/Buffet'
import Jasons from './components/pages/Jasons'
import NotFoundPage from './components/pages/NotFoundPage'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/buffet' component={Buffet} />
          <Route path='/jasons' component={Jasons} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default App
