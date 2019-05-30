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
    // console.log(this.state.data[1].classification)
    // console.log(this.state.data.dimensions)
    if (!this.state.data) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <div className="container">
          <input type="text" placeholder="search..." />
          <div className="section">
            <div className="fav-icon">
              <i className="fas fa-heart fa-3x" aria-hidden="true"></i>
            </div>
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

                <p>Presented: {this.state.data.dating.presentingDate}</p>

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

                <div className="columns is-multiline is-mobile">
                  {this.state.data.materials.map(material =>
                    <div key={material} className="column">
                      <p className="has-text-centered">{material}</p>
                    </div>
                  )}
                </div>

                <p className="has-text-centered">{this.state.data.location}</p>

                <hr />

                {// <div className="columns is-multiline is-mobile">
                //   {this.state.data.dimensions.map(dimension =>
                //     <div key={dimension.value, dimension.value, dimension.unit} className="column">
                //       <div className="dimension-box">
                //         <p>{dimension}</p>
                //       </div>
                //     </div>
                //   )}
                // </div>
                }

                <div className="columns is-multiline is-mobile">
                  {this.state.data.classification.people.map(person =>
                    <div key={person} className="column">
                      <p>{person}</p>
                    </div>
                  )}
                </div>




                {
                // <div className="column">
                //   <p>{this.state.data.classification.people}</p>
                // </div>
                }

                {

                // <div className="columns is-multiline is-mobile">
                //     {this.state.data.classification.people.map(person =>
                //       <div key={person} className="column">
                //         <div className="person-box">
                //           <p>{person}</p>
                //         </div>
                //       </div>
                //     )}
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
