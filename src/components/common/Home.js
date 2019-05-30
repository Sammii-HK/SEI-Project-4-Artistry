import React from 'react'
// import axios from 'axios'

import Navbar from './Navbar'
import Search from '../gallery/Search'
// import GalleryShow from '../gallery/GalleryShow'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null,
      gallery: null
    }

    // this.getArt = this.getArt.bind(this)
    // this.galleryToggle = this.galleryToggle.bind(this)
  }

  // galleryToggle() {
  //   this.setState( { gallery: !!true} )
  //   return this.state.gallery === true ? 'active': 'hidden'
  // }
  //
  // toggleMarker(marker){
  //   return this.state.activeLocation === marker? 'active-marker': 'marker'
  // }

  // getArt() {
  //   axios.get('/api/rijksmuseum/collection')
  //     .then(res => this.setState({ data: res.data.artObjects }))
  //     .catch(err => console.error(err))
  // }
  //
  // componentDidMount() {
  //   this.getArt()
  // }

  render() {
    // if (!this.state.data) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <Search
          // data={this.state.data}
        />

        {// <GalleryShow
        //   data={this.state.data}
        // />
        }
      </main>
    )
  }
}


export default Home


// {!this.state.gallery && <Search
//   data={this.state.data}
// /> }
// {this.state.gallery && <GalleryShow
//   onClick={this.galleryToggle}
//   data={this.state.data}
// /> }
