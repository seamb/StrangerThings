import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom' ;
import './App.css';
import Posts from './components/Posts'
import Home from './components/Home'
import Users from './components/Users'
import AddPosts from './components/AddPosts';
import PostDetails from './components/PostDetails'

const apiURL = "https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT";

const App = () => {
const [posts, setPosts] = useState ([]);
const [token, setToken] = useState ('');
const [user, setUser] = useState ('');

  useEffect(() => {
    try{
      const getPosts = async () => {
        const strangeResp = await fetch (`${apiURL}/posts`);
        const results = await strangeResp.json();
        const posts = results.data.posts;

      
        
      if (posts)
       setPosts(posts);
      }
      getPosts();
      } catch (error) {
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
            <li>
              <Link to="/users/:method">Sign up / Sign in</Link>
            </li>
          </ul>
        </nav>


    <div className="App">
      <h1>
        STRANGER THINGS APP !
      </h1>
      
    </div>
  
   <Route exact path="/">
     <Home user={user} token={token}/>
   </Route>
   <Route exact path="/posts">
     <Posts posts={posts} setPosts={setPosts} token={token}/>
     <AddPosts posts={posts} setPosts={setPosts} user={user} token={token}/>
   </Route>
   <Route exact path="/posts/:POST_ID">
     <PostDetails posts={posts} token={token} />
   </Route>
   <Route exact path="/users/:method">
     <Users setToken={setToken} setUser={setUser} />
   </Route>
 
    </>
  );
  
}


export default App;

