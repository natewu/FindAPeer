import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./components/Home";
// import Header from "./components/Header.js"
import PrivateRoute from "./components/routing/PrivateRoute"
import Login from "./components/Authenticating/Authentication.js";
import SignUp from "./components/SignUp.js";
import Quiz from "./components/Quiz.js";
import Header from "./components/Header"; 
import Chat from "./components/Chat"
import ANDY from "./components/ANDY"
import BOT from "./components/Bot"

function App(userState) {
  const userID = userState;
  console.log("User: " + userID)
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Header/>
          <div className="routes">
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <PrivateRoute exact path="/chat" component={Chat}/>
            <Route exact path="/ali" component={ANDY}/>
            <Route exact path="/bot" component={BOT}/>
            <PrivateRoute exact path="/quiz" component={Quiz}/>
          </div>
       
        </div>
      </Router>
    </div>
  );
}



export default App;
