import React from 'react'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
    }
  }

  render() {
    // if (!this.state) return <h1>Loading...</h1>
    return (
      <h1>Hello World!</h1>
    )
  }
}


export default Home
