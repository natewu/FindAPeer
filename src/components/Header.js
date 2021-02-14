import React, { useContext } from "react";
import {Link} from "react-router-dom"
import {UserContext} from "./Authenticating/UserProvider";
import "./Header.css"
import {Button} from "@material-ui/core"
import firebase from "firebase/app"


 const Header = ({ component: RouteComponent, ...rest}) =>
{
     var currentUser = useContext(UserContext);
     return (
    !!currentUser ? (
           (<div style={{position:"relative", textDecoration:"none", color:"black", fontWeight:300}} className="topnav">
                <Button  className="link" color="secondary"><Link to="/">Home</Link></Button>
                <Button  className="link" color="secondary"><Link to="/Quiz">Quiz</Link></Button>
                <Button className="signOut" className="link"  color="secondary" onClick={() => {firebase.auth().signOut()}}>Sign Out</Button>
            </div>)
        ) :
           (
    <div style={{position:"relative", textDecoration:"none", color:"black", fontWeight:300}} className="topnav">
                <Button  color="secondary" className="link"><Link to="/">Home</Link></Button>
                {/* <Link to="/quiz">Quiz</Link> */}
            </div>
           )
)}

/* 
export class Header extends Component {


    render() {
        // var currentUser = useContext(UserContext);

        return (
            <div style={{position:"relative", textDecoration:"none", color:"black", fontWeight:300}} className="topnav">
                <Link to="/">Home</Link>
                <Link to="/quiz">Quiz</Link>
            </div>
        )
    }
}

 */
/*



*/

export default Header
