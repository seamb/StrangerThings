import React from "react";

export const IndPost = ({post, token, children, username}) => {
console.log(post._id, "ID POST");
console.log(post.isAuthor, "is author of post");
console.log(post.author.username, "is authors username");

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
    </div>    
   :null 
   
}

// export default IndPost;