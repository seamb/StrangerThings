import React, { useEffect } from 'react';

// import callApi from '../util';

// const Postings = async () =>{
//   const [posts, setPosts] = useState("")
  
//   const postData = await callApi ({
//     url: `/posts`
//   })
// }
// console.log(postData)

const apiURL ="https://strangers-things.herokuapp.com/api/2111-CSU-RM-WEB-PT";

const Posts = ({posts, setPosts}) => {

  useEffect(() => {
      const getPosts = async () => {
        const strangePosts = await fetch (`${apiURL}/posts`);
        console.log(strangePosts, "STRANGER")
        const results = await strangePosts.json();
        console.log(results, "RESULTS")
        const posts = results.data.posts;
        console.log(posts, "POSTS")
        console.log(results.data.posts)
         

     if (posts){
      setPosts(posts)
    }
  }
    getPosts();
  
  }, [])

     console.log("THESE POSTS:", posts)
    return(
   
     posts && posts.map((post, index) => {
        return (
          <p key={index}>
            <strong>{post.title}</strong> <br/>
          {/* {  console.log(posts)} */}
            {post.description} <br/>
            {post.price} 
            <br/>
           location: <em>{post.location}</em>
          </p>
          )
      }));
    }

export default Posts;