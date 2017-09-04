import React from 'react';

import Post from './Post';

//It gets every post
const Blog = ({ posts }) => {
  const postsList = posts.map( (post) => {
    return(
      <Post
        post={ post }
        key={ post.id }
      />
    )
  });

//And return it into a list
  return (
    <ul>
      { postsList }
    </ul>
  );
}

export default Blog;

