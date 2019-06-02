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
  }


  handleFavourite() {
    const image = this.state.data.webImage.url
    const { objectNumber, title } = this.state.data
    const favorite = { objectNumber: objectNumber, title, image }

    if(Favorite.isFavorite(favorite)) {
      // remove the favorite
      console.log('handleFav props render', this.props)
      axios.delete(`/api/favorites/${this.props.match.params.id}`, favorite, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
        .then(res => Favorite.removeFavorite(res.data))
        .then(() => this.setState({ data: this.state.data }))
    } else {
      // add the favorite
      axios.post('/api/favorites', favorite, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
        .then(res => Favorite.addFavorite(res.data))
        .then(() => this.setState({ data: this.state.data }))
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

  // the problem doesnt exist on login and logout, this is because this process clears the data and then sets it again

  componentDidUpdate() {
    // this.setState({ favorites: Favorite.getFavorites() })

    console.log('componentDidUpdate this.state.data', this.state.data)
    console.log('componentDidUpdate this.state.data.objectNumber', this.state.data.objectNumber)
    console.log('componentDidUpdate this.state.favorites', this.state.favorites)
    // console.log('componentDidUpdate this.state.favorites', this.state.favorites)
    Favorite.getFavorites()
    // this.handleFavourite()
  }

  // if you go to an artwork and press the button repeatedly, it is fine
  // but if you press the button then add something else {
  // then go back to the page and delete it
  // it doesnt remove the right index...
  // but it does always remove the last item from the array
  // I think its because one thing is checking state and the other localStorage
  // this is because the profile page is rendering correctly on this.state, but the things running off local storage are going arwy
  //

  // State is organising the array in ascending order

  // local storage is pushing onto the end of the array


  // THIS.STATE.DATA.FAVORITES ON PROFILE PAGE
  //
  // objectNumber: "SK-C-109"
  // objectNumber: "SK-A-3064"
  // objectNumber: "SK-A-3580"
  // objectNumber: "SK-C-5"

  // LOCALSTORAGE favorites
  //
  // ["BK-AM-33-C", "SK-A-3064", "SK-A-3580", "SK-C-109", "SK-C-5"]
  // 0: "BK-AM-33-C"
  // 1: "SK-A-3064"
  // 2: "SK-A-3580"
  // 3: "SK-C-109"
  // 4: "SK-C-5"


  render() {
    if (!this.state.data) return <h1>Loading</h1>
    // <div>
    //   <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    //   <span className="sr-only">Loading...</span>
    // </div>

    console.log('gallery props render', this.props)
    console.log('gallery this.state.data.objectNumber', this.state.data.objectNumber)

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
