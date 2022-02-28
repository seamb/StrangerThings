import React, { useState } from "react";
import callApi from "../util";

export const Messenger = ({post, token, user}) =>{
    const [message, setMessage]= useState('');
    console.log(post, "POSTS Props from Details");
    console.log(post.author.username, "USERNAME IN DEETS");
  
    // const fetchMessage = async () => {
    //     const userData = await callApi({ 
    //     url: '/users/me', 
    //     token,
    //   })
    //    console.log('User Data', userData);
    //    console.log("messages", userData.data.posts);
        

    // }
    // fetchMessage();

    const handleSubmit = async(e) => {
        e.preventDefault();
       
        // /posts/POST_ID/messages
        const resp = await callApi({
            url: `/posts/${post._id}/messages`,
            method: "POST",
            token,
            body: {
                message:{
                    content: message,
                }
            }
        
        })

        console.log(post, "POSRPSRSROSORSO");

        
    //      if (userResp.data) {
    //   console.log('token in account', userResp.data.token);

    //   const userData = await callApi({ 
    //     url: '/users/me', 
    //     token: userResp.data.token,
    //   })
    //    console.log('User Data', userData);
       
    //     setToken(userResp.data.token);
    //     console.log("my name is", userData.data.username);
    //     setUser({username: userData.data.username})
    //     if(userResp.data.token || null ){
    //     history.push("/");
    //     }
    // }


        console.log("MESSS RESP", resp);
       
    }

return(
    <>
    {/* <h1>** MESSAG$ES **</h1> */}
    {token && post.isAuthor === false 
    ?<form onSubmit={handleSubmit}>
        <div>MESSAG$ES</div>
        <input
            type="text"
            placeholder="Write a message to seller"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            />
        <button type="submit">Send Message</button>
    </form>
    : null}
    </>
    )
}

export default Messenger;