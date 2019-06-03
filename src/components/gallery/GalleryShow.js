import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Favorite from '../../lib/Favorite'
import Magnifier from 'react-magnifier'

import Navbar from '../common/Navbar'

class GalleryShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      favorites: Favorite.getFavorites()
    }

    this.handleFavourite = this.handleFavourite.bind(this)
    this.getArtItem = this.getArtItem.bind(this)
  }


  handleFavourite() {
    const token = Auth.getToken()
    const image = this.state.data.webImage.url
    const { objectNumber, title } = this.state.data
    const favorite = { objectNumber: objectNumber, title, image }

    if(Favorite.isFavorite(favorite)) {
      // remove the favorite
      console.log('handleFav props render', this.props)
      axios.delete(`/api/favorites/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
        .then(() => Favorite.removeFavorite(favorite))
        .then(() => this.setState({ favorites: Favorite.getFavorites() }))
    } else {
      // add the favorite
      axios.post('/api/favorites', favorite, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
        .then(() => Favorite.addFavorite(favorite))
        .then(() => this.setState({ favorites: Favorite.getFavorites() }))
    }
  }

  getArtItem() {
    const token = Auth.getToken()
    axios.get(`/api/rijksmuseum/collection/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => this.setState({ data: res.data.artObject }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getArtItem()
  }

  componentDidUpdate() {
    console.log('this.state.favorites', this.state.favorites)
  }

  render() {
    if (!this.state.data) return <h1>Loading</h1>
    // <div>
    //   <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    //   <span className="sr-only">Loading...</span>
    // </div>

    const image = this.state.data.webImage.url

    return (
      <main>
        <Navbar />
        <div className="container">
          <div className="section">
            <div className="fav-icon">
              <i
                className={`${Favorite.isFavorite(this.state.data) ? 'fas fa-heart fa-3x' : 'far fa-heart fa-3x'}`}
                aria-hidden="true"
                onClick={this.handleFavourite}></i>
            </div>
            <div className="columns is-multiline is-centered">
              <div className="column is-8 image-col">

                <Magnifier src={image} width={500} />

                {
                // <div
                //   className="image"
                //   style={{ backgroundImage: `url(${this.state.data.webImage.url})` }} >
                // </div>
                }
              </div>
              <div className="column is-8">
                <div className="title is-4">{this.state.data.title}</div>
                <div className="subtitle is-4 has-text-right">{this.state.data.principalOrFirstMaker}</div>
                <p>{this.state.data.plaqueDescriptionEnglish}</p>
                <hr />

                <div className="level">
                  <div className="level-item">Presented: {this.state.data.dating.presentingDate}</div>
                  <div className="level-item">{this.state.data.physicalMedium}</div>
                </div>

                <hr />

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
                <div className="columns is-multiline is-mobile">
                  {this.state.data.materials.map(material =>
                    <div key={material} className="column">
                      <p className="has-text-centered">{material}</p>
                    </div>
                  )}
                </div>
                <hr />

                {this.state.data.location &&
                <p>Location: {this.state.data.location}</p> }

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

                {this.state.data.classification.people &&
                <div className="columns is-multiline is-mobile people-col">
                  {this.state.data.classification.people.map(person =>
                    <div key={person} className="column is-4">
                      <p>{person}</p>
                    </div>
                  )}
                </div> }



              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default GalleryShow
