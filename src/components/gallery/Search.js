import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Navbar from '../common/Navbar'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      searchInput: ''
    }

    this.getArt = this.getArt.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  getArt() {
    const token = Auth.getToken()
    axios.get('/api/rijksmuseum/collection', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => this.setState({ data: res.data.artObjects }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getArt()
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value || '' })
  }

  onSubmit(e) {

    if (this.state.data !== null) {
      e.preventDefault()

      const query = this.state.searchInput
      console.log('SUBMIT query', query)

      axios.get('/api/rijksmuseum/collection', {
        params: { query }
      })
        .then(res => {
          this.setState({ data: res.data.artObjects })
          this.props.history.push('/')
        })
        .catch(err => console.error(err))
    }
  }

  render() {
    if (!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <Navbar />
        <div className="container images-container">

          <div className="search-container">

            <form onSubmit={this.onSubmit}>
              <input
                id="searchInput"
                name="search"
                type="search"
                placeholder="search..."
                className="search "
                onChange={this.handleChange}
              />

              {
                <button
                  type="submit"
                  value="Submit"
                  placeholder="Submit"
                  onClick={this.onSubmit}
                > Submit </button>
              }
            </form>

          </div>

          <div className="section">
            <div className="columns is-mobile is-multiline">
              {this.state.data.map(art =>
                <div key={art.objectNumber} className="column is-3-desktop is-6-tablet is-half-mobile">
                  <Link to={`/gallery/${art.objectNumber}`}>
                    <div
                      className="art-image"
                      style={{ backgroundImage: `url(${art.webImage.url})` }} >
                      <div className="subtitle is-6">{art.title}</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default Search
