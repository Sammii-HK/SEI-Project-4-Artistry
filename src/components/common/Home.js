import React from 'react'

import Navbar from './Navbar'
import Search from '../gallery/Search'

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
  // FOR REFERENCE
  // toggleMarker(marker){
  //   return this.state.activeLocation === marker? 'active-marker': 'marker'
  // }

  render() {
    // if (!this.state.data) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <Search
          // data={this.state.data}
        />
      </main>
    )
  }
}


export default Home
