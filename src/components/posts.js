import React from 'react';

function Posts({posts}) {
    return(
       posts.map((post, index) => {
        return (
          <p key={index}>
            <strong>{post.title}</strong> <br/>
            {post.description} <br/>
            {post.price} 
            <br/>
           location: <em>{post.location}</em>
          </p>
          )
      }));
    }

export default Posts;