import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
import app from '../base'


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = app.auth().currentUser;
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