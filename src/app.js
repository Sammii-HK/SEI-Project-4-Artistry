import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'

class App extends React.Component {
  //
  // componentDidMount() {
  //   axios.get('')
  //     .then(res => this.setState({ data: res.data }))
  // }

  render() {
    if(!this.state) return <p>Loading...</p>
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
