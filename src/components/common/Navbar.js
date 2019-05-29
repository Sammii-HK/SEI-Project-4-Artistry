import React from 'react'
import { Link } from 'react-router-dom'

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

            </div>
            <div className="navbar-end">
              {/* right-hand links */}
              <Link to="/gallery" className="navbar-item">Gallery</Link>
              <Link to="/street" className="navbar-item">Street</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
