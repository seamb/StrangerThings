import React from "react";
// import { Link } from "react-router-dom";

const IndPost = ({post, token, children}) => {
// console.log(post._id, "ID POST");
// console.log(post.isAuthor, "is author of post");
// console.log(post.author.username, "is authors username");
// console.log(post, 'POST IN IND');
    return post 
    
    ? <div>
         
        <p>
            <strong>{post.title}</strong> 
            <br/>
             {post.description}
             <br/>
             {post.price} 
             <br/>
             <em>{post.location}</em>
        </p>
        {children}
        {/* <Link to={`/posts/${post._id}`}>See details</Link> */}
    </div>    
   :null 
   
}

export default IndPost;