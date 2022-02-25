import React, { useState } from 'react';
import callApi from '../util';


const AddPosts = ({token, setPosts}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();

        const postResp = await callApi ({
        url: `/posts`,
        method: "POST",
        token,
        body: {
            post:{
           
                title,
                description,
                price,
                willDeliver              
            }}
           
        })
        console.log("Post reponses", postResp)

        const allPosts = await callApi({
        url: '/posts'
        })
        console.log("ALL NEW POSTS",allPosts.data.posts);
        setPosts(allPosts.data.posts)

    }
    return(
    <>
        <h1>
            Add a new Post
        </h1>
            <form onSubmit={handleSubmit}>
            <input type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ></input> <br/>
            <input type='text'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ></input> <br/>
            <input type='text'
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            ></input> <br/>
            <input type='text'
            placeholder='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            ></input> <br/>
            <input type='text'
            placeholder='Available for delivery?'
            value={willDeliver}
            onChange={(e) => setWillDeliver(e.target.value)}
            ></input> <br/>
            <button type='Submit'>Submit</button>
        </form>
    </>    
    )
    }

export default AddPosts;