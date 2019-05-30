import React from 'react'
import axios from 'axios'

import Navbar from '../common/Navbar'

class GalleryShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  getArtItem() {
    axios.get(`/api/rijksmuseum/collection/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data.artObject }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getArtItem()
  }

  render() {
    console.log(this.state.data)
    // console.log(this.state.data.classification.people)
    if (!this.state.data) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <div className="container">
          <input type="text" placeholder="search..." />
          <div className="section">
            <div className="columns is-multiline is-centered">
              <div className="column is-8 image-col">
                <div
                  className="image"
                  style={{ backgroundImage: `url(${this.state.data.webImage.url})` }} >
                </div>
              </div>
              <div className="column is-8">
                <div className="title is-4">{this.state.data.title}</div>
                <div className="subtitle is-4 has-text-right">{this.state.data.principalOrFirstMaker}</div>
                <p className="is-6">{this.state.data.plaqueDescriptionEnglish}</p>
                <hr />
                <p className="is-6">{this.state.data.physicalMedium}</p>

                <div className="columns is-multiline is-mobile">
                  {this.state.data.colors.map(color =>
                    <div key={color} className="column">
                      <div
                        className="color-box"
                        style={{ backgroundColor: color }} >
                      </div>
                    </div>
                  )}

                </div>

                <hr />
                {
                // <div className="column">
                //   <p>{this.state.data.classification.people}</p>
                // </div>
                }

                {
                // <div className="columns is-multiline is-mobile">
                //     <div key={person[]} className="column">
                //       <div className="person-box">
                //         <p>{person}</p>
                //       </div>
                //     </div>
                //   )}
                // </div>
                }

                {
                // <div className="columns is-multiline is-mobile">
                //   {this.state.data.dimensions.map(dimension =>
                //     <div key={dimension.value} className="column">
                //       <div className="dimension-box">
                //         <p>{dimension}</p>
                //       </div>
                //     </div>
                //   )}
                // </div>
                }


              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default GalleryShow


// <p className="is-6">{this.state.data.people}</p>

// {art.principalMakers.map(artist =>
//   <div key={artist.name} className="is-6">{artist.name}</div>
// )}
