import React, { useEffect } from 'react';
import callApi from '../util';
import {IndPost} from './IndPost.js'



const Posts = ({posts, setPosts, token, user, fetchPosts  }) => {

  const handleDelete = async (POST_ID) =>{
    const resp = await callApi({
      url: `/posts/${POST_ID}`,
      method: 'DELETE',
      token,
      
    })
    console.log(resp, "RESPOPNSE ON Posts");
    
    const postList = await callApi ({
      url: `/posts`,
      token,
    })

    console.log(postList, 'Post List');
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
        {token 
        && post.isAuthor
        ? <button onClick={() => handleDelete(post._id)}>DELETE POST</button>
        : null}

      

        </IndPost>)
     
    }
  </>
  
}

export default Posts;
      


