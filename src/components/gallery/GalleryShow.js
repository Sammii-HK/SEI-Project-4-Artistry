import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Favorite from '../../lib/Favorite'

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
    // e.preventDefault()
    const image = this.state.data.webImage.url
    const { objectNumber, title } = this.state.data
    const favorite = { object_number: objectNumber, title, image }

    if(Favorite.isFavorite(favorite)) {
      // remove the favorite
      console.log('Remove favorite... TODO')
    } else {
      // add the favorite
      axios.post('/api/favorites', favorite, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
        .then(res => Favorite.addFavorite(res.data))
        .catch(err => console.error(err))
    }
  }

  // Flash.setMessage('success', res.data.message)
  // this.props.history.push('/characters')

  // HANDLE DELETE FROM BORED OF THRONES
  // handleDelete() {
  //   const token = Auth.getToken()
  //   axios.delete(`/api/characters/${this.props.match.params.id}`, {
  //     headers: { 'Authorization': `Bearer ${token}` }
  //   })
  //     .then(() => this.props.history.push('/characters'))
  // }

  // THEN REFERENCE THE DELETE FUNCTION ON A BUTTON
  // <button className="button is-danger" onClick={this.handleDelete}>Delete</button>

  // SET STATE FOR FAV, IF TRUTHY THEN DISPLAY A CLOSE BUTTON
  // IF STATE IS FALSE, THEN REMOVE CLOSE AND SHOW FAV BUTTON

  getArtItem() {
    axios.get(`/api/rijksmuseum/collection/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data.artObject }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getArtItem()
  }

  render() {
    console.log('gallery this.state.data', this.state.data)
    // console.log('gallery this.state.data.user', this.state.data.user)
    if (!this.state.data) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <div className="container">
          <input type="text" placeholder="search..." />
          <div className="section">
            <div className="fav-icon">
              <i
                className={`${Favorite.isFavorite(this.state.data) ? 'fas fa-heart fa-3x' : 'fa fa-heart fa-3x'}`}
                aria-hidden="true"
                onClick={this.handleFavourite}></i>
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
