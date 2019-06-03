import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import axios from 'axios'

import Auth from '../../lib/Auth'
import Favorite from '../../lib/Favorite'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
      searchInput: ''
    }

    this.toggleActive = this.toggleActive.bind(this)
    this.logout = this.logout.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  logout() {
    Auth.removeToken()
    Favorite.clearFavorites()
    // window.location.reload()
    this.props.history.push('/')
  }

  //
  // handleChange(e) {
  //   this.setState({ searchInput: e.target.value || '' })
  // }
  //
  //
  // onSubmit(e) {
  //
  //   console.log(window.location.href)
  //
  //   if (this.state.data !== null) {
  //     e.preventDefault()
  //     const query = this.state.searchInput
  //     console.log('SUBMIT QUERY', query)
  //
  //     const token = Auth.getToken()
  //     axios.get('/api/rijksmuseum/collection', {
  //       params: { query },
  //       headers: { 'Authorization': `Bearer ${token}` }
  //     })
  //       .then(res => {
  //         this.setState({ data: res.data.artObjects })
  //         if (window.location.href !== 'http://localhost:8000/#/search') this.props.history.push('/search')
  //       })
  //       .catch(err => console.error(err))
  //   }
  // }

  render() {
    return (
      <nav className="navbar is-dark" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            {
              /* Navbar branding and burger menu */
            // <Link to="/" className="navbar-item is-size-4">Artistry</Link>
            }
            {Auth.isAuthenticated() && <Link to="/search" className="navbar-item is-size-4">Artistry</Link>}
            {!Auth.isAuthenticated() && <Link to="/" className="navbar-item is-size-4">Artistry</Link>}

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
              <div className="search-container">

                {
                  // <form onSubmit={this.onSubmit}>
                  //   <input
                  //     id="searchInput"
                  //     name="search"
                  //     type="search"
                  //     placeholder="search..."
                  //     className="search "
                  //     onChange={this.handleChange}
                  //   />
                  //
                  //   {
                  //     <button
                  //       type="submit"
                  //       value="Submit"
                  //       placeholder="Submit"
                  //       onClick={this.onSubmit}
                  //     > Submit </button>
                  //   }
                  // </form>
                }

              </div>

            </div>
            <div className="navbar-end">
              {/* right-hand links */}
              {Auth.isAuthenticated() && <Link to='/profile' className="navbar-item">Profile</Link>}
              {Auth.isAuthenticated() && <Link to='/search' className="navbar-item">Search</Link>}
              {!Auth.isAuthenticated() && <Link to='/register' className="navbar-item">Register</Link>}
              {!Auth.isAuthenticated() && <Link to='/login' className="navbar-item">Log in</Link>}
              {Auth.isAuthenticated() && <Link to='/' className="logout navbar-item" onClick={this.logout}>Logout</Link>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
