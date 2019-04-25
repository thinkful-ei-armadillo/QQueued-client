import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function MentorRoute({ component, ...props }) {
  const Component = component;
  const context = useContext(UserContext);
  return (
    <Route
      {...props}
      render={componentProps =>
        context.user.title !== "mentor" ? (
          <Redirect to={"/waiting-list"} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}