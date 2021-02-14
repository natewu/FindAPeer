import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./components/Home";
// import Header from "./components/Header.js"
import PrivateRoute from "./components/routing/PrivateRoute"
import Login from "./components/Authentication.js";
import SignUp from "./components/SignUp.js";
import Quiz from "./Quiz.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/quiz" component={Quiz}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
