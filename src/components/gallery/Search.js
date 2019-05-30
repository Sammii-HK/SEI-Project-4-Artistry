import React from 'react'
import { Link } from 'react-router-dom'

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
                <div key={art.objectNumber} className="column is-3 is-half-mobile">
                  <Link to={`/rijksmuseum/collection/${art.objectNumber}`}>
                    <div
                      className="art-image"
                      style={{ backgroundImage: `url(${art.webImage.url})` }} >
                      <div className="subtitle is-6">{art.title}</div>
                    </div>
                  </Link>
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


// {art.principalMakers.map(artist =>
//   <div key={artist.name} className="is-6">{artist.name}</div>
// )}
