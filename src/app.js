import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// import axios from 'axios'

import Home from './components/common/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'
import GalleryShow from './components/gallery/GalleryShow'

import 'bulma'

import './style.scss'

class App extends React.Component {

  render() {
    // if(!this.state) return <p>Loading...</p>
    return (
      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/gallery/:id" component={GalleryShow} />
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
