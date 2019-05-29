import React from 'react'

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
        <div className="container">
          <input type="text" placeholder="search..." />
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
