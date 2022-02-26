import React from 'react';
import callApi from '../util';
import {IndPost} from './IndPost.js'



const Posts = ({posts, setPosts, token}) => {

  const handleDelete = async(POST_ID) =>{
    const resp = await callApi({
      url: `/posts/${POST_ID}`,
      method: 'DELETE',
      token,
      
    })
    console.log(resp, "RESPPP");
    
    const postList = await callApi ({
      url: `/posts`,
      token,
    })

    console.log(postList, 'PL');
    const postsLeft = postList.data.posts;
    if(postsLeft)
    setPosts(postsLeft)
  }

 
  return <>
    {
      posts.map(post=> <IndPost key={post._id} post={post} token={token}>
        {token && post.isAuthor
        ? <button onClick={() => handleDelete(post._id)}>DELETE POST</button>
        : null}
        </IndPost>)
     
    }
  </>
  

}
export default Posts;
      


