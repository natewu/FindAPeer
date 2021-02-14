import React, { Component } from 'react'
import "./Chat.css"
import Posts from "./Posts";
import {v4 as uuidv4} from 'uuid';
export class Chat extends Component {

    state = {
        username: "",
        text: "",
        posts: []
    }
    post = (text, username) => {
        const newPost = {
            id: uuidv4(),
            username: username,
            text: text
        }
        this.setState({posts: [...this.state.posts, newPost]});
        console.log(newPost.id);
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.post(this.state.text, this.state.username);
        this.setState({text: "", username: "Ali"});
    }
    onChange = (e) => this.setState({text: e.target.value });
    setUsername = (e) => {
        this.setState({username: e.target.value});
    }

    render() {
        return (
            <div className="chat">
                <h1 style={{gridRow:2}}>Chat</h1>
                <div id="chatBOX" style={{gridRow:3, overflowY:"scroll", overflowX: "hidden"}}>
                    {/* <Post post={this.post}/> */}
                    {this.state.posts.map(posts =>(
                        <Posts username={posts.username} text={posts.text}/>
                    ))}
                </div>
                <form onSubmit={this.onSubmit} style={{display:"flex",gridRow:4, width:"90%", margin:"auto"}}>
                    {/* <input id="username" placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.setUsername}/> */}
                    <input id="text" placeholder="What's happening?" type="text" name="text" style={{flex:"10", padding:"15px"}} value={this.state.text} onChange={this.onChange}/>
                    <input id="submit" type="submit" value="Submit" className="btn" style={{flex:"2", cursor:"pointer"}}/>
                </form>
            </div>
        )
    }
}

export default Chat
