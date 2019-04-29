import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";
import TokenService from '../../services/token-service';

export default function StudentRoute({ component, ...props }) {
  const Component = component;
  const context = useContext(UserContext);
  console.log(!!TokenService.getAuthToken)
  return (
    <Route
      {...props}
      render={componentProps =>
        !TokenService.getAuthToken() ? (
          <Redirect to={"/login"} />
          ) : context.user.title !== "student" ? (
            <Redirect to={"/waiting-room"} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}
