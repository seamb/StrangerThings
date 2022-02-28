import React, { useEffect, useState } from 'react';
import callApi from '../util';


const Home = ({user, token }) => {
    const [usersMessages, setUsersMessages] = useState([])
    const fetchMessage = async () => {
        const userData = await callApi({ 
        url: '/users/me', 
        token,
      })
       console.log('User Data', userData.data);
       console.log('posts', userData.data.posts);
       console.log('messages', userData.data.messages);
       const [usersPosts] = userData.data.posts;
       console.log("USERSPOSTS",usersPosts);
       const [usersMessages] = userData.data.messages;
       console.log("USERSMESSAGES",usersMessages);
   
    }
       
   useEffect(() => {
      fetchMessage()
      setUsersMessages(usersMessages)
    }, []);

    return(
        <div>
            <h1 className='welcome'>
                WELCOME  {user.username.toUpperCase()}!
            </h1>
            <div>{usersMessages}</div>
           
        </div>
    )
    }

export default Home;