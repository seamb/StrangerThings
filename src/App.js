import React, { useState, useEffect } from 'react';
import './App.css';
import Posts  from './components/posts.js'


const apiURL = "https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT/posts";

function App() {
const [posts, setData] = useState ([])

useEffect(() => {

  getPosts();
   }, []);
  

   const getPosts = async () => {
     const strangePosts = await fetch (apiURL);
     console.log(strangePosts, "STRANGER")
     const results = await strangePosts.json();
     console.log(results, "RESULTS")
     const posts = results.data.posts;
     console.log(posts, "POSTS")
     console.log(results.data.posts)
     setData(posts)
   }
  return (

  
    <div className="App">

      <h1>
        STRANGER THINGS APP !
      </h1>
      <Posts posts={posts}/>
     
  
    </div>
  );
}


export default App;

