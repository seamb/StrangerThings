import React, { useEffect } from 'react';


const apiURL ="https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT";

function Posts({posts, setPosts}) {

  useEffect(() => {
    try{
      const getPosts = async () => {
        const strangePosts = await fetch (`${apiURL}/posts`);
        console.log(strangePosts, "STRANGER")
        const results = await strangePosts.json();
        console.log(results, "RESULTS")
        const posts = results.data.posts;
        console.log(posts, "POSTS")
        console.log(results.data.posts)
        setPosts(posts)

      }
    getPosts();


    }
    catch (error){
    console.log(error)
    }

  }, [])
  
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