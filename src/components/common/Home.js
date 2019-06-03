import React from 'react'

import Navbar from './Navbar'
// import Search from '../gallery/Search'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null,
      gallery: null
    }
  }

  render() {
    // if (!this.state.data) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half-desktop is-two-thirds-tablet">
                <div className="section has-text-centered">
                  <p className="is-size-5">Please <Link to='/login'>Log in</Link></p>
                  <p>OR</p>
                  <p className="is-size-5">Need an account? <Link to='/register'>Register</Link> now</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}


export default Home
