import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import callApi from '../util';

function Users ({setToken, setUser, user}) {
    const params = useParams();
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    console.log('params', params)
    const handleSubmit = async (event) => {
        event.preventDefault();
        
    const userResp = await callApi ({
        url: `/users/${params.method}`,
        method: "POST",
        body: {
            user: {
                username,
                password
            }
        }
    })  
        console.log(userResp.data)
        console.log(userResp.url, "users name")
        // if(userResp.data){
        // console.log('TOKEN', userResp.data.token)
        // console.log(username, password, username)
       
    if (userResp.data) {
      console.log('token in account', userResp.data.token);
      // call /users/me
      const userData = await callApi({ 
        url: '/users/me', 
        token: userResp.data.token,
      })
       console.log('User Data', userData);
       
        setToken(userResp.data.token);
        console.log("my name is", userData.data.username);
        setUser({username: userData.data.username})
        if(userResp.data.token || " "){
        history.push("/home");

        }}
    } 
   

    return( <>
        <h1>
            Please {params.method} to continue.
        </h1>
        <form onSubmit={handleSubmit}>
            <input type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ></input> <br/>
            <input type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input><br/>
            <button type='Submit'>Submit</button>
        </form>
    </>
    )
    }

export default Users;