import { template } from "@babel/core";
import React from 'react';
// import "./Posts.css"

const Posts = ({username, text}) =>{
    return(
        <div className="post">
            <div className="post__body" style={{display:"grid", gridTemplateColumns:"0.5fr 5fr", margin: "5px 20px 5px 20px",borderRadius:"20px", backgroundColor:"rgba(240, 248, 255, 0.486)"}}>
                <h3>{username} :</h3> <p align="left">{text}</p>
            </div>
        </div>
    )
}

export default Posts;