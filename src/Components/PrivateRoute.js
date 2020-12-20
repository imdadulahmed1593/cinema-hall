import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useStateValue } from "./StateProvider";

function PrivateRoute({ children, ...rest }) {
  const user = useSelector(selectUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
