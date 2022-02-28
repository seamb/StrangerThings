import React from "react";


const IndPost = ({post, children}) => {
    return post 
    
    ? <div>
         
        <p className='post'>
            <strong>{post.title}</strong> 
            <br/>
             {post.description}
             <br/>
             {post.price} 
             <br/>
             <em>{post.location}</em>
             <br/>
             {post.willDeliver}
        </p>
        {children}
    </div>    
   :null 
   
}

export default IndPost;