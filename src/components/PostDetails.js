import React from "react";
import { useParams } from "react-router-dom";
import IndPost from "./IndPost";
import Messenger from "./Messenger";

const PostDetails = ({ posts, token, user }) => {
    const postId = useParams();
    console.log(postId, "POST ID in Deets");
    const [filt] = posts.filter(post=> post._id === postId.postId);
    console.log(filt);
    console.log(posts, "deets posts");
   
    return (
        <div className="details">
            
            <h3>POST DETAILS</h3>
            <IndPost post={filt}>    
          
            <Messenger post={filt} token={token}/>
         
            </IndPost>
             
        </div>
    )
}



export default PostDetails;