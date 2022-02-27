import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../util';
import IndPost from './IndPost.js'
import { useLocation, useHistory } from 'react-router-dom';



const Posts = ({ posts, setPosts, token, user, fetchPosts }) => {

  // console.log(posts, "POSTS IN POSTS");
  const [postOb] = posts
  // console.log(postOb, "Just POSTS"); 
  const { search } = useLocation();
  const history = useHistory();
  console.log('Search location POSTS', search);
  const searchParams = new URLSearchParams(search);
  const searchTerm = searchParams.get('searchTerm') || '';

  console.log("SEARCH TERM", searchTerm);
  // console.log(object);


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
    //if search term is True it will pass through Filetered
  
  const searchResults = (post, searchTerm) => {
 
    const { title, description, price, location, author: {username} } = post;
    // console.log( 'post fields', title, description, price, location, username );
    const toCheck = [title, description, price, location, username ];
    
    for (const field of toCheck) {
      if (field.toLowerCase().includes(searchTerm.toLowerCase()))
        return true;
    }

  } 


    const filteredPosts = posts.filter(post => searchResults(post, searchTerm));
    console.log("FILTERED POSTS",filteredPosts);
    

    return <>
      <h4>Search</h4>
        <input 
        type="text"
        placeholder="looking for"
        onChange={(e) => { history.push(e.target.value?`/posts?searchTerm=${e.target.value}`: '/posts')}}
        />
        <br/>
      {
        filteredPosts.map(post => <IndPost key={post._id} post={post} token={token} user={user}>
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
      


