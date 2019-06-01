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
  }

  render() {
    // if (!this.state.data) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <Search />
      </main>
    )
  }
}


export default Home
