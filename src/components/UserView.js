import React from "react";
import callApi from "../util";

const UserView = ({post, token})=>{
    const tbd = async (POST_ID) => {
    const resp = await callApi ({
        url: `/posts/${post._id}`,
        method: "POST",  
        token,
      
    })
    console.log(resp, "RESPOPNSE ON Posts");

}
}