import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {UserContext} from "../Authenticating/UserProvider";
import auth from '../base'


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  var currentUser = useContext(UserContext)
  console.log(currentUser)
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute