import { template } from "@babel/core";
import React from 'react';
// import "./Posts.css"

const Posts = ({username, text}) =>{
    return(
        <div className="post">
            <div className="post__body" style={{display:"grid", gridTemplateColumns:"0.5fr 0.1fr 5fr", margin: "5px 20px 5px 20px",borderRadius:"20px", backgroundColor:"rgba(240, 248, 255, 0.3)"}}>
            <img src={username} alt="pfp"style={{maxWidth:"100%", height:"auto", borderRadius:"50%"}}/><h3></h3> <p align="left" style={{padding:0}}>{text}</p>
            </div>
        </div>
    )
}

export default Posts;