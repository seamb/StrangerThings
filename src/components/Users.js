
   
import React, { useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import callApi from '../util';
import { Link } from 'react-router-dom';

function Users ({ setToken, setUser }) {
    const params = useParams();
    const history = useHistory();
    // const location = useLocation();
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

    if (userResp.data) {
      console.log('token in account', userResp.data.token);

      const userData = await callApi({ 
        url: '/users/me', 
        token: userResp.data.token,
      })
       console.log('User Data', userData);
       console.log(userData.data.messages, "USER MESS");
       console.log(userData.data.posts, "USER POSTs");
        setToken(userResp.data.token);
        console.log("my name is", userData.data.username);
        setUser({username: userData.data.username})
        if(userResp.data.token || null ){
        history.push("/home");
        }
    }
    } 

         
            
console.log(username);
    return( 
    <div className='login'>
        <h3>
            Please {params.method} to continue.
        </h3>
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
            <button className='userbutton' type='Submit'>Submit</button>
        </form>
        <Link to="/users/register">Click here to Sign Up</Link>
    </div>
    ) 
    }

export default Users;