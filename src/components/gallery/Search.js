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
    // this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)

  }


  // make it so if there was a successful search, push that value into my options

  // SEARCH PARAMS I WANT TO SEARCH BY
  // $.artObject.title
  // $.artObject.colors
  // $.artObject.principalMaker
  // $.artObject.dating.presentingDate
  // $.artObject.objectCollection
  // $.artObject.materials
  // $.artObject.classification.iconClassDescription

  // search the collection using a JSON call
  // search(query) {
  //   return $.getJSON('https://www.rijksmuseum.nl/api/nl/collection?q=Q&key=fpGQTuED&format=json'.replace('Q', query))
  // }


  getArt() {
    axios.get('/api/rijksmuseum/collection')
      .then(res => this.setState({ data: res.data.artObjects }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getArt()
  }

  // React select
  // handleChange(e) {
  //   this.setState({ searchInput: e.target.value || '' })
  //   console.log('e.target.value', e.target.value)
  //
  //   // console.log('Option selected:', selectedOption)
  //   // console.log(inputValue.value)
  //   const query = e.target.value
  //
  //   if (e.keyCode === 13) {
  //     console.log('this.state.value..', this.state.value)
  //   }

  // # this url returns a working search query in insomnia
  // # https://www.rijksmuseum.nl/api/en/collection/?q=still%20life&key={{ api_key  }}&format=json


  search(e) {

    // will search only when enter button is pressed
    if (e.keyCode === 13) {

      this.setState({ searchInput: e.target.value || '' })

      const query = e.target.value

      axios.get('/api/rijksmuseum/collection', {
        params: { query }
      })
        .then(res => this.setState({ data: res.data.artObjects }))
        .catch(err => console.error(err))
    }
  }

  render() {

    // const { selectedOption } = this.state
    console.log('search state.data', this.state.data)
    if (!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <div className="container images-container">

          <div className="search-container">

            <form>
              <input
                id="searchInput"
                type="search"
                placeholder="search..."
                // ref="searchInput"
                className="search "
                onKeyDown={this.search}
                onChange={this.search}
              />
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
