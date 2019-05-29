import React from 'react'
import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      active: false
    }

    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <nav className="navbar is-dark" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            {/* Navbar branding and burger menu */}
            <Link to="/" className="navbar-item is-size-4">Artistry</Link>

            <a role="button" className={`navbar-burger ${this.state.active ? ' is-active' : ''}`} onClick={this.toggleActive}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>

          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>
            {/* Everything else */}
            <div className="navbar-start">
              {/* left-hand links */}
              {!Auth.isAuthenticated() &&<Link to='/register' className="navbar-item">Register</Link>}
              {!Auth.isAuthenticated() &&<Link to='/register' className="navbar-item">Log in</Link>}
              {Auth.isAuthenticated() &&
              <Link to='/profile' className="navbar-item">Profile</Link>}
              {Auth.isAuthenticated() &&
              <Link to='/' className="logout navbar-item" onClick={this.logout}>Logout</Link>}

            </div>
            <div className="navbar-end">
              {/* right-hand links */}
              <Link to='/search' className="navbar-item">Search</Link>
              <Link to='/gallery' className="navbar-item">Gallery</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
