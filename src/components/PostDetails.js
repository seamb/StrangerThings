import React from "react";
import { useParams } from "react-router-dom";
import IndPost from "./IndPost";
import Messenger from "./Messenger";

const PostDetails = ({posts,token}) => {
    const postId = useParams();
    console.log(postId, "POST ID in Deets");
    const [filt] = posts.filter(post=> post._id === postId.postId);
    console.log(filt);
   
    return (
        <div>
            
            <h1>POST DETAILS</h1>
            <IndPost post={filt}>
            <Messenger post={filt} token={token}/>
            </IndPost>
             
        </div>
    )
}



export default PostDetails;