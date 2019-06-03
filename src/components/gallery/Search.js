import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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

  handleChange(e) {
    this.setState({ searchInput: e.target.value || '' })
  }

  onSubmit(e) {

    e.preventDefault()

    const query = this.state.searchInput
    console.log('SUBMIT query', query)

    axios.get('/api/rijksmuseum/collection', {
      params: { query }
    })
      .then(res => {
        // this.props.history.push('/')
        this.setState({ data: res.data.artObjects })
      })
      .catch(err => console.error(err))
    // }
  }

  render() {

    // const { selectedOption } = this.state
    console.log('search state.data', this.state.data)
    if (!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <div className="container images-container">

          <div className="search-container">

            <form onSubmit={this.onSubmit}>
              <input
                id="searchInput"
                name="search"
                type="search"
                placeholder="search..."
                className="search "
                // onSubmit={this.onSubmit}
                // onKeyDown={this.search}
                onChange={this.handleChange}
              />

              {
                <button
                  type="submit"
                  value="Submit"
                  placeholder="Submit"
                  onClick={this.onSubmit}
                  // style="hidden"
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




// this.options = [
//   { value: 'none', label: 'Select an Artist' },
//   { value: 'rembrandt', label: 'Rembrandt' },
//   { value: 'van gogh', label: 'Van Gogh' },
//   { value: 'vermeer', label: 'Vermeer' }
// ]


//
// <Select
//   defaultValue={this.options[0]}
//   options={this.options}
//   onChange={this.handleChange}
//   className="filterSelect"
// />


// <ul>
//   {this.options.map(item => (
//     <li key={item.value}>{item.label}</li>
//   ))}
// </ul>


// <input type="search" placeholder="search" name="q"/>
// <button
//   type="submit"
//   onClick={this.onSubmit}
// >
//   Search
// </button>



// Customisable react select
// handleChange(newValue: any, actionMeta: any) {
//   console.group('Value Changed')
//   console.log(newValue)
//   console.log(`action: ${actionMeta.action}`)
//   console.groupEnd()
// }
// handleInputChange(inputValue: any, actionMeta: any) {
//   console.group('Input Changed')
//   console.log(inputValue)
//   console.log(`action: ${actionMeta.action}`)
//   console.groupEnd()
// }


// <input type="text" placeholder="search..." />

// handleChange = selectedOption => {
//   this.setState({ selectedOption })
//   console.log('Option selected:', selectedOption)
// }
