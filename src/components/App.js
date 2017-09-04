import React, { Component } from 'react';
import axios from 'axios';
import Blog from './Blog';
import img from './img.jpg';
import '../style.css';

const API_URL = 'https://api.github.com/users'

//This is the class that will hold the state of the post
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.handleUsers = this.handleUsers.bind(this)
  }

//The default user is 'lizparody' and I map the users to use the function handleUsers
  componentDidMount() {
    let users = ['lizparody']
    users.map(this.handleUsers)
  }

//Axios get the request of the API {user} gist, and it changes the posts to hold the data
  handleUsers(user) {
    axios
      .get(`${API_URL}/${user}/gists`)
      .then(res => {
        const {data} = res;

        this.setState({
          posts: data
        })
      })
  }

//It renders the image, the text box (that can look up for any user with gist), and the button that search for the gists
  render() {
    return (
      <div>
      <img src={img} alt='home'/>

        <input placeholder="gist-username" type="text" onChange={(event) => {
          const value = event.currentTarget.value
          this.setState({ user: value })
        }}/>

        <button onClick={() => { this.handleUsers(this.state.user) }}>Search</button>

        <Blog posts={ this.state.posts } />
      </div>
    );
  }
}

