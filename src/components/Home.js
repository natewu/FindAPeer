import React from 'react'
import app from "./base.js";

function Home() {
    return (
        <div>
            HOME PAGE
            <button onClick={()=>app.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Home;
