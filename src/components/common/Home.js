import React from 'react'

import Navbar from './Navbar'

class Gallery extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
    }
  }

  render() {
    // if (!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <h1>Hello World!</h1>
      </main>
    )
  }
}


export default Gallery
