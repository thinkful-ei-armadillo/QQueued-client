import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      { ...props }
      render={ ({ history, match }, componentProps) =>
        !TokenService.getAuthToken() ? (
          <Redirect to={ "/login" } />
        ) : (
            <Component history={ history } match={ match } { ...componentProps } />
          )
      }
    />
  );
}