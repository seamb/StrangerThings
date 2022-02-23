import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom' ;
import './App.css';
import Posts from './components/Posts'
import Home from './components/Home'
import Users from './components/Users'
import AddPosts from './components/AddPosts';

// const apiURL = "https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT/posts";

const App = () => {
const [posts, setPosts] = useState ([]);
const [token, setToken] = useState ('');
const [user, setUser] = useState ('');

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
   <Route path="/posts">
     <Posts posts={posts} setPosts={setPosts}/>
     <AddPosts posts={posts} setPosts={setPosts} user={user} token={token}/>
   </Route>
    <Route exact path="/users/:method">
     <Users setToken={setToken} setUser={setUser} user={user} />
   </Route>
 
    </>
  );
  
}


export default App;

