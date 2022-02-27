import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom' ;
import './App.css';
import Posts from './components/Posts'
import Home from './components/Home'
import Users from './components/Users'
import AddPosts from './components/AddPosts';
import PostDetails from './components/PostDetails'
import callApi from './util';



const App = () => {
const [posts, setPosts] = useState ([]);
const [token, setToken] = useState ('');
const [user, setUser] = useState ('');


const fetchPosts = async () => {
  const resp = await callApi ({
  url: `/posts`,
  token,

  }) 
console.log("RESP__", resp)
const posts = resp.data.posts;
  if (posts)
  setPosts(posts);
      }

  useEffect(() => {
    try{
       
   fetchPosts();


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
              <Link to="/users/login">Log in</Link>       
            </li>
            <li>
              <Link to="/users/register">Sign up</Link>
            </li>
          </ul>
        </nav>


    <div className="App">
      <h1>
        STRANGER THINGS APP !
      </h1>
      
    </div>
  
   <Route exact path="/home">
     <Home user={user} token={token}/>
   </Route>
   <Route exact path="/posts">
     <Posts posts={posts} setPosts={setPosts} token={token} user={user} fetchPosts={fetchPosts}/>
     <AddPosts posts={posts} setPosts={setPosts} user={user} token={token}/>
   </Route>
   <Route path="/posts/:postId">
     <PostDetails posts={posts} token={token} />
   </Route>
   <Route exact path="/users/:method">
     <Users setToken={setToken} setUser={setUser} />
   </Route>
 
    </>
  );
  
}


export default App;

