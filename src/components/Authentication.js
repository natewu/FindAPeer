import React from 'react'
import "./Authentication.css"
import app from "./base"
import firebase from "firebase"
var firebaseui = require('firebaseui');


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

var ui = new firebaseui.auth.AuthUI(app.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

function Authentication() {
    return (
        <div id="firebaseui-auth-container">
        </div>
    )
}

export {Authentication}
