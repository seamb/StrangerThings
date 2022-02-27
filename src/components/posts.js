import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../util';
import IndPost from './IndPost.js'





const Posts = ({ posts, setPosts, token, user, fetchPosts }) => {
console.log(posts, "POSTS IN POSTS");
const [postOb] = posts
console.log(postOb, "Just POSTS"); 
  const handleDelete = async (POST_ID) =>{
    const resp = await callApi({ 
      url: `/posts/${POST_ID}`,
      method: 'DELETE',
      token,
    })
      console.log(resp,"RESP in POSTS");
    const postList = await callApi ({
      url: `/posts`,
      token,
    })

    const postsLeft = postList.data.posts;
    if(postsLeft)
    setPosts(postsLeft)
  }

  
  useEffect(() => {
    fetchPosts()
  }, []);

 
  return <>
    {
      posts.map(post => <IndPost key={post._id} post={post} token={token} user={user}>
        <Link to={`/posts/${post._id}`}>See details</Link>
        {token 
        && post.isAuthor
        ? <button onClick={() => handleDelete(post._id)}>DELETE POST</button>
        : null}
        </IndPost>)   
    }
  </>
  
}

export default Posts;
      


