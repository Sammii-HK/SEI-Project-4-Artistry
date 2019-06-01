import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Favorite from '../../lib/Favorite'
import ReactImageMagnify from 'react-image-magnify'

import Navbar from '../common/Navbar'

class GalleryShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      favorites: null
    }

    this.handleFavourite = this.handleFavourite.bind(this)
  }


  handleFavourite() {
    const image = this.state.data.webImage.url
    const { objectNumber, title } = this.state.data
    const favorite = { objectNumber: objectNumber, title, image }

    // compoare localStorage.favorites[i] with this.state.data.objectNumber

    // when the button is clicked, it is removing the data from every favorite index item so it is null

    // CONSOLE LOG
    // gallery this.state.data.objectNumber SK-A-372
    // Favorite.js:33 FIND/IS favorite.objectNumber undefined
    // Favorite.js:33 FIND/IS favorite.objectNumber SK-A-372
    // Favorite.js:17 REMOVE favorite.objectNumber SK-A-372
    // Favorite.js:19 REMOVE-INDEX index 7
    // GalleryShow.js:31 Remove favorite... TODO
    // All items now null in localStorage

    if(Favorite.isFavorite(favorite)) {
      // remove the favorite
      Favorite.removeFavorite(favorite)
      console.log('Remove favorite... TODO')
      axios.delete(`/api/favorites/${this.props.match.params.id}`, favorite, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
        .then(res => Favorite.deleteFavorite(res.data))
        .catch(err => console.error(err))
    } else {
      console.log(favorite)
      // add the favorite
      axios.post('/api/favorites', favorite, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
        .then(res => Favorite.addFavorite(res.data))
        .catch(err => console.error(err))
      console.log('Added favorite')
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
    if (!this.state.data) return <h1>Loading</h1>
    // <div>
    //   <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    //   <span className="sr-only">Loading...</span>
    // </div>

    console.log('gallery props render', this.props)
    console.log('gallery this.state.data.objectNumber', this.state.data.objectNumber)
    // console.log('gallery this.state.data.user', this.state.data.user)
    const image = this.state.data.webImage.url

    return (
      <main>
        <Navbar />
        <div className="container">
          <input type="text" placeholder="search..." />
          <div className="section">
            <div className="fav-icon">
              <i
                className={`${Favorite.isFavorite(this.state.data) ? 'fas fa-heart fa-3x' : 'far fa-heart fa-3x'}`}
                aria-hidden="true"
                onClick={this.handleFavourite}></i>
            </div>
            <div className="columns is-multiline is-centered">
              <div className="column is-8 image-col">
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: this.state.data.title,
                    isFluidWidth: true,
                    src: image,
                    enlargedImagePosition: 'over'
                  },
                  largeImage: {
                    src: image,
                    width: 700,
                    height: 50,
                    isFluidWidth: true,
                    enlargedImagePosition: 'over',
                    imageClassName: 'art-image'
                  }
                }} />
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


// {art.principalMakers.map(artist =>
//   <div key={artist.name} className="is-6">{artist.name}</div>
// )}
