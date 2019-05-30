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
            <div className="columns is-multiline">
              {this.props.data.map(art =>
                <div key={art.id} className="column is-3">
                  <div className="subtitle is-6">{art.title}</div>
                  <div className="is-6">{art.principalOrFirstMaker}</div>
                  <p className="is-6">{art.plaqueDescriptionEnglish}</p>
                  <p className="is-6">{art.people}</p>
                  <div
                    className="art-image"
                    style={{ backgroundImage: `url(${art.webImage.url})` }} >
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


// {art.principalMakers.map(artist =>
//   <div key={artist.name} className="is-6">{artist.name}</div>
// )}
