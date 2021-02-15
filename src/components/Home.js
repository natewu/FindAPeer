import React from 'react'
import app from "./base.js";
import "./Home.css"
import {Button} from "@material-ui/core"
import Typewriter from 'typewriter-effect/dist/core';
import {Link} from "react-router-dom"

var h1 = document.getElementById('app');
 
var typewriter = new Typewriter(h1, {
  loop: true,
  delay: 100,
});
 
typewriter
  .typeString("Matches")
  .pauseFor(5000)
  .start();


function Home() {
    
    return (
        <div className="content">
            <h1 id="app" style={{gridColumn:2, fontWeight:100, paddingTop: "25px", position:"static"}}></h1>
            {/* <button onClick={()=>app.auth().signOut()}>Sign Out</button> */}
            <div className="pairing">
                <img src="https://cdn.discordapp.com/attachments/396871882139500564/810543746969108530/unknown.png" alt="pfp" style={{maxWidth:"100%", height:"auto", borderRadius: "50%", gridColumn:2, gridRow:2, boxShadow: "0 0 10px 10px rgb(0 0 0 / 15%)"}}/>
                <div className="Details">
                    <h1 style={{gridRow:1}}>Pandy Zhou</h1>
                    <div style={{gridRow:2}}>
                        <h2 >Age: 18</h2>
                        <h3>Personality: Extrovert</h3>
                        <h3>Major: Reproductive Systems Engineer</h3>
                    </div>
                    <Button style={{gridRow:3}} variant="outlined" color="secondary"><Link to="/chat">Connect</Link></Button>
                </div>
            </div>
        </div>
    )
}
// typewriter.stop();
export default Home;
