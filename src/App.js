import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./components/Home";
import {Authentication as Login} from "./components/Authentication.js";
import SignUp from "./components/SignUp.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
