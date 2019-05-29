import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Profile extends React.Component {

  constructor(){
    super()

    this.state = {
      data: {}
    }
  }

  componentDidMount(){

    const token = Auth.getToken()

    axios.get('/api/profile', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err))
  }


  render(){
    if(!this.state.data) return null
    return(
      <main>
        <section className="section">
          <div className="container">
            <div className="edit-form-wrapper">
              <div>
                <Link to="/">
                  <button className="button edit-profile">Home</button>
                </Link>

                <div className="title is-4">Profile</div>
                <label className="label">Username</label>
                <div>{this.state.data.username}</div>

                <label className="label">Email</label>
                <div>{this.state.data.email}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

}

export default Profile
