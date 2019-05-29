import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
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
              {this.props.data.map(art =>
                <div key={art._id} className="column is-3 is-6-mobile">
                  <div className="subtitle is-6">{art.title}</div>
                  <div className="is-6">{art.principalOrFirstMaker}</div>
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${art.image})` }} >
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default Search
