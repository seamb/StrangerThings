import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom' ;
import './App.css';
import Posts from './components/Posts'
import Home from './components/Home'
import Users from './components/Users'

// const apiURL = "https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT/posts";

function App() {
const [posts, setPosts] = useState ([]);
const [token, setToken] = useState ('');
// const [user, setUser] = useState ({}) //no username in api object
console.log("app.js token", token)
// console.log("user is", username)
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
     <Home />
   </Route>
   <Route path="/posts">
     <Posts posts={posts} setPosts={setPosts}/>
   </Route>
    <Route exact path="/users/:method">
     <Users setToken={setToken} />
   </Route>
 
    </>
  );
  
}


export default App;

