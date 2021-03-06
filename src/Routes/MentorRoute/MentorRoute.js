import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import TokenService from '../../services/token-service';

export default function MentorRoute({ component, ...props }) {
  const Component = component;
  const context = useContext(UserContext);
  return (
    
    <Route
      {...props}
      render={ ({ history, match }, componentProps) =>
        !TokenService.getAuthToken() ? (
          <Redirect to={"/login"} />
          ) : context.user.title !== "mentor" ? (
            <Redirect to={"/waiting-list"} />
        ) : (
          <Component history={history} match={match} {...componentProps} />
        )
      }
      />
  );
}