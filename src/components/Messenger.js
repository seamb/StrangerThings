import React, { useState } from "react";
import callApi from "../util";

export const Messenger = ({post, token}) =>{
    const [content, setContent] = useState('')
    console.log(post);
    const handleSubmit = async(event) => {
        event.preventDefault();
    
    const resp = await callApi ({
        url: `posts/${post._id}/messages`,
        method: "POST",
        token,
        body:{
            messages:{
                content,
            }
        } 
    })
    console.log(resp,"RESPONSE")
    }
return(
    <>
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Write a message to seller"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            />
        <button type="submit">Send Message</button>
    </form>
    </>
    )
}

export default Messenger;