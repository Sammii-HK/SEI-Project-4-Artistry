import React from 'react'
import axios from 'axios'

import Navbar from './Navbar'
import Search from '../gallery/Search'

class Gallery extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
    }
  }

  getArt() {
    axios.get('/rijksmuseum/collection')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err))
  }
  // getArt() {
  //   axios.get(`https://www.rijksmuseum.nl/api/en/collection/${rijksKey}`)
  //     .then(res => this.setState({ data: res.data }))
  //     .catch(err => console.error(err))
  // }
  componentDidMount() {
    this.getArt()
  }

  render() {
    // if (!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <Search
          data={this.state.data}
        />
      </main>
    )
  }
}


export default Gallery
