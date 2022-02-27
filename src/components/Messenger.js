import React, { useState } from "react";
import callApi from "../util";

export const Messenger = ({post, token}) =>{
    const [message, setMessage]= useState('');
    console.log(token, post, "POSTS Props from Details");
     console.log(token, "TOKEN Props from Details");
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
        console.log("MESSS RESP", resp);
    }

return(
    <>
    <h1>MESSAG$ES</h1>
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Write a message to seller"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            />
        <button type="submit">Send Message</button>
    </form>
    </>
    )
}

export default Messenger;