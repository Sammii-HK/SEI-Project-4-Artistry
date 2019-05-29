import React from 'react'
import axios from 'axios'

import Navbar from './Navbar'
import Search from '../gallery/Search'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null
    }

    this.getArt = this.getArt.bind(this)
  }

  getArt() {
    axios.get('/api/rijksmuseum/collection')
      .then(res => this.setState({ data: res.data.artObjects }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getArt()
  }

  render() {
    if (!this.state.data) return <h1>Loading...</h1>
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


export default Home
