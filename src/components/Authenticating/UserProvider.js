import React, { Component, createContext } from "react";
import { auth } from "../base";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(userAuth => {
      console.log("AUTH STATE WAS CHANGED! ");
      console.log(userAuth);
      this.setState({ user: userAuth});          // this hook should just happen automatically
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>)
  }
}

export default UserProvider