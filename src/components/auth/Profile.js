import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Favorite from '../../lib/Favorite'
import Navbar from '../common/Navbar'

class Profile extends React.Component {

  constructor(){
    super()

    this.state = {
      data: {},
      favorites: [Favorite.getFavorites()]
    }
  }

  componentDidMount(){
    const token = Auth.getToken()
    axios.get('/api/profile', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err))
    this.setState({ favorites: Favorite.getFavorites() })
  }


  render(){
    console.log('profile this.state.data', this.state.data)
    console.log('profile this.state.favorites', this.state.favorites)
    console.log('profile this.state.data.favorites', this.state.data.favorites)
    if(!this.state.data && !this.state.favorites) return <h1>Loading...</h1>
    return(
      <main>
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="edit-form-wrapper">
              <div>
                <div className="title is-4">Profile</div>
                <label className="label">Username</label>
                <div>{this.state.data.username}</div>

                <label className="label">Email</label>
                <div>{this.state.data.email}</div>
              </div>
              <hr />

              <div className="favorites images-container">
                <h3 className="title is-4">Favorites</h3>
                {this.state.data.favorites &&
                  <div className="columns is-mobile is-multiline">
                    {this.state.data.favorites.map(favorite =>
                      <div key={favorite.objectNumber} className="column is-3-desktop is-6-tablet is-half-mobile">
                        <Link to={`/gallery/${favorite.objectNumber}`}>
                          <div
                            className="art-image"
                            style={{ backgroundImage: `url(${favorite.image})` }} >
                            <div className="subtitle is-6">{favorite.title}</div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                }

              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

}

export default Profile
