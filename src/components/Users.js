// import React, { useState } from 'react';
// import { useParams, useHistory, } from 'react-router-dom';
// import callApi from '../util';

// const Users = ({setToken, setUser}) => {
//     const params = useParams();
//     const history = useHistory();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('')

//     const handleSubmit = async (event) => {        
//         event.preventDefault();

//         const userData = await callApi ({
//         url: `/users/${params.method}`,
//         method: "POST",
//         headers: { 
//             'Content-Type': 'application/json',
//         },
//         body: {
//             user:{
//                 username,
//                 password             
//             }}
           
//         })
//         console.log("user reponses", userData)

//         console.log("USER DATA",userData)

//         if (userData) {
//         console.log('token in account', userData.data);
//         const userInfo = await callApi({ 
//         url: '/users/me', 
//         token: userData.data.token,
//         })
//         console.log('userInfo', userInfo);
//         console.log(userInfo.data.username, "is my name")

//         setToken(userData.data.token);
//         setUser({username: userInfo.data.username})
//         if (userData.data.token){
//         history.push("/");
//         }
//       }
    
//     }

//         console.log('params', params)

//     return( <>
//         <h1>
//             Please {params.method} to continue.
//         </h1>
//         <form onSubmit={handleSubmit}>
//             <input type='text'
//             placeholder='username'
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             ></input> <br/>
//             <input type='password'
//             placeholder='password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             ></input><br/>
//             <button type='Submit'>Submit</button>
//         </form>
//     </>
//     )}

// export default Users;

import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import callApi from '../util';

// const apiURL ="https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT";

function Users ({setToken, setUser}) {
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
 console.log("user Resp", userResp)
        // const resp = await fetch(`${apiURL}/users/${params.method}`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user: {
        //             username,
        //             password
        //         }
        //     })
        // })
        // const result = await resp.json();
        // console.log('TOKEN', result.data.token)
        // console.log('resutlts--', result)
        console.log(username, password)
        // setToken(result.data.token);
        // setUser()
        // history.push("/");

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