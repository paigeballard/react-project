import React, { Component } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar'
// react router import
import { Switch, Route, Redirect } from 'react-router-dom'
// import pages
import Home from './components/pages/Home'
import Jasons from './components/pages/Jasons'
import NotFoundPage from './components/pages/NotFoundPage'
import Restaurant from './components/pages/Restaurant'
import MyCal from './components/pages/Calendar'
// import fire from './config/Fire'
import Login from './components/pages/Login'


class App extends Component {
  constructor () {
    super()
    this.state = ({
      user: null
    })
    // this.authListner = this.authListner.bind(this)
  }

  // componentDidMount () {
  //   this.authListner()
  // }

  // authListner () {
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log('user', user)
  //     if (user) {
  //       this.setState({ user })
  //       window.localStorage.setItem('user', user.uid)
  //     } else {
  //       this.setState({ user: null })
  //       window.localStorage.removeItem('user')
  //     }
  //   })
  // }

  render () {
    // const PrivateRoute = ({ component: Component, ...props }) => (
    //   <Route {...props} render={(allProps) => this.state.user ? <Component {...allProps} /> : <Redirect to='./login' />} />
    // )
    return (
      <div>
        {/* {this.state.user ? <Home /> : <Login />} */}
        <Navbar />
        <Switch>
          <Route path='/login' component={Login} />
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
