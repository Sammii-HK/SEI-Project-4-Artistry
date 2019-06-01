import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }

    this.getArt = this.getArt.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.options = [
      { value: 'none', label: 'Select an Artist' },
      { value: 'Rembrant', label: 'Rembrant' },
      { value: 'VanGogh', label: 'Van Gogh' },
      { value: 'Vermeer', label: 'Vermeer' }
    ]
  }

  // SEARCH PARAMS I WANT TO SEARCH BY
  // $.artObject.title
  // $.artObject.colors
  // $.artObject.principalMaker
  // $.artObject.dating.presentingDate
  // $.artObject.objectCollection
  // $.artObject.materials
  // $.artObject.classification.iconClassDescription

  getArt() {
    axios.get('/api/rijksmuseum/collection')
      .then(res => this.setState({ data: res.data.artObjects }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getArt()
  }

  handleChange(inputValue) {
    // console.log(e.target.value)
    console.log(inputValue.value)
  }

  // <input type="text" placeholder="search..." />

  render() {
    console.log('search state.data', this.state.data)
    if (!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <div className="container images-container">

          <Select
            defaultValue={this.options[0]}
            options={this.options}
            onChange={this.handleChange}
            className="filterSelect"
          />

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
