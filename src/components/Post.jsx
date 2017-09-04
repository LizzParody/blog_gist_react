import React, { Component } from 'react';
import axios from 'axios';
import '../style.css'

class Post extends Component {
  constructor() {
    super()

    this.state = {
      gist: null,
    }
  }
  componentDidMount() {
    this.handlePostRequest()
  }

  handlePostRequest() {
    const { post } = this.props
    const [filename] = Object.keys(post.files)
    const { raw_url } = post.files[filename]

    axios.get(raw_url).then(response => {
      const { data } = response

      this.setState({
        gist: new String(data).substring(0, 140)
      })
    })
  }
  render() {
    const { post } = this.props;
    const link = post.html_url
    const [filename] = Object.keys(post.files)
    let description = post.description ? post.description : filename

//It returns the link (that can be the description if it has one, or the filename) and a substring of 140 characters of the content of the gist
  return (
    <li>
      <a href={link} target="_blank"> {description} </a>
    <pre>
      <code >
        {this.state.gist}
      </code>
    </pre>
    </li>
  );
}
}

export default Post;

