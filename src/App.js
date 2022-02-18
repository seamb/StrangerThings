import React, { useState, useEffect } from 'react';
import './App.css';

const apiURL = "https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT/posts";

function App() {
const [posts, setPosts] = useState ([])

useEffect(() => {
  
const apiFetchData = async () => {
  const response = await fetch (apiURL);
  console.log(response)
  const posts = await response.json();

  console.log("DATA POSTs", posts)
  setPosts(posts);

};

  apiFetchData();
  }, [])
  
  return (
    <div className="App">

      <h1>
        STRANGER THINGS APP !
      </h1>
          {
          posts.map((data, index) =>{
          return <p key="index">{data}</p>
          }) 
        } 
      
    </div>
  );
}


export default App;

