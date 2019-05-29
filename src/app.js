import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// import axios from 'axios'

import Home from './components/common/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'
import Gallery from './components/gallery/Gallery'
import Search from './components/gallery/Search'

import 'bulma'

import './style.scss'

class App extends React.Component {

  render() {
    // if(!this.state) return <p>Loading...</p>
    return (
      <Router>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
