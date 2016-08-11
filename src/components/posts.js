import React from 'react';
import Post from './post'

const Posts = (posts) => (
  <div>
   {posts.posts.map((post,idx) => {
      return (
      <Post id={idx} key={idx} {...post} />)
      })
    }
  </div>
)

export default Posts