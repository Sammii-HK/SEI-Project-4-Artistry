import React from 'react'

import Navbar from '../common/Navbar'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
    }
  }

  render() {
    // if (!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <div className="container">
          <div className="section">
            <div className="columns is-mobile is-multiline">
              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>

              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>

              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>

              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>
              <div className="column is-3 is-6-mobile">
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default Home
