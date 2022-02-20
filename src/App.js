import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom' ;
import './App.css';
import Posts from './components/Posts'
import Home from './components/Home'
import Users from './components/Users'

const apiURL = "https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT/posts";

function App() {
const [posts, setPosts] = useState ([])

useEffect(() => {
  try{
    const getPosts = async () => {
      const strangePosts = await fetch (apiURL);
      console.log(strangePosts, "STRANGER")
      const results = await strangePosts.json();
      console.log(results, "RESULTS")
      const posts = results.data.posts;
      console.log(posts, "POSTS")
      console.log(results.data.posts)
      setPosts(posts)
  }
  getPosts();
  } catch (error){
    console.log(error)
  }  
  }, []);
  return (
    <>
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            {/* <li>
              <Link to="/users/:method">Sign in / Sign up</Link>
            </li> */}
          </ul>
        </nav>


    <div className="App">
      <h1>
        STRANGER THINGS APP !
      </h1>
      
    </div>
  
   <Route exact path="/">
     <Home/>
   </Route>
   <Route path="/posts">
     <Posts posts={posts}/>
   </Route>
    <Route exact path="/users/:method">
     <Users/>
   </Route>
 
    </>
  );
  
}


export default App;

