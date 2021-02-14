import React, { useCallback, useContext } from "react";
import "./Authentication.css";
import app from "./base";
import firebase from "firebase";
import { withRouter } from "react-router";
import  { Redirect } from 'react-router-dom'
import { AuthContext } from "./Auth.js";
import {Button} from "@material-ui/core"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          
          // <Redirect to="./home"/>
          // redirect here

      } catch (error) {
        <Redirect to="/home"/>
        alert(error);
      }
    },
    [history]
  );

  // ok so it still doesnt redirect to "/"
  const {currentUser} = AuthContext;

  if (currentUser) {
    return <Redirect to="/" />;
  }
// time to do some UI magic
// yes pls
  return (
    <div className="wrapper__login">
        <div className="login__panel">
            <div className="login" style={{zIndex:10}}>
                <h1 style={{alignContent:"center"}}>Log in</h1>
                <form style={{display:"grid", gridTemplateRows:"1fr 1fr 1fr", width:"80%", margin:"0 auto"}}onSubmit={handleLogin}>
                    <label>
                        <input name="email" type="email" placeholder="Email" />
                    </label>
                    <label>
                        <input name="password" type="password" placeholder="Password" />
                    </label>
                    <Button variant="outlined" color="secondary" type="submit">Log in</Button>  
                </form>
            </div>
        </div>
    </div>
  );
};

export default withRouter(Login);

/* var firebaseui = require('firebaseui');
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// CODE FOR SIGNING UP A USER!

app.auth().signInWithEmailAndPassword("alisTest@mail.com","123456")
.then((userCredential) => {
    alert("YOUVE BEEN LOGGED IN")
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

auth.createUserWithEmailAndPassword("alisTest@mail.com", "123456")
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("Youve signed in")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Failed sign up: "+error);
    // ..
  });

var ui = new firebaseui.auth.AuthUI(app.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });


var uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: async (authResult) => {
        const userInfo = authResult.additionalUserInfo;
        if (userInfo.isNewUser && userInfo.providerId === "password") {
          try {
            await authResult.user.sendEmailVerification();
            console.log("Check your email.");
          } catch (e) {
            console.log(e);
          }
        }
        return false;
      },
    },
  };

function Authentication() {
    return (
        <div>
            <div className="login__panel">
                <StyleFirebaseAuth className="login" uiConfig={uiConfig} firebaseAuth={app.auth()} /> 
            </div>
        </div>
    )
}

export {Authentication} */

