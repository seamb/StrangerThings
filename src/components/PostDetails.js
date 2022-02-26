import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Messenger } from './Messenger.js';
import { IndPost } from './IndPost.js'

const PostDetails =({posts, token}) => {
    const {POST_ID} = useParams();
    const [post] =posts.filter( post => post._id === Number(POST_ID));
    
    console.log(post, "Post Details");


return <>
    
    <h1>Post Details</h1>

    <IndPost post={post}>
        <Messenger post={post} token={token}/>
        {post.content.map(content => {
            return <div>content</div>
        })}
    </IndPost>
</>
}
export default PostDetails;