import React from 'react'
import "./Authentication.css"
import app from "./base"
import firebase from "firebase"
// var firebaseui = require('firebaseui');
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// CODE FOR SIGNING UP A USER!

// app.auth().signInWithEmailAndPassword("alisTest@mail.com","123456")
// .then((userCredential) => {
//     alert("YOUVE BEEN LOGGED IN")
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

// auth.createUserWithEmailAndPassword("alisTest@mail.com", "123456")
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     alert("Youve signed in")
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert("Failed sign up: "+error);
//     // ..
//   });

// var ui = new firebaseui.auth.AuthUI(app.auth());
// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });


var uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: "/signup",
    callbacks: {
      signInSuccessWithAuthResult: async (authResult) => {
        const userInfo = authResult.additionalUserInfo;
        console.log("Hi world");
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

  const uiConfig2 = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
    ]
  };


function Authentication() {
    return (
        <div>
            <div className="login__panel">
                <StyleFirebaseAuth className="login" uiConfig={uiConfig} firebaseAuth={app.auth()} /> 
                {/* <StyleFirebaseAuth uiConfig={uiConfig2} firebaseAuth={app.auth()} />  */}

            </div>
        </div>
    )
}

export {Authentication}
