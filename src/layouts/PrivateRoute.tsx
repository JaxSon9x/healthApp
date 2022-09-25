import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

const PrivateRoute = ({ children, ...rest }: any) => {
  let { user } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? children : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }
            }
          />
        )
      }
    />
  );
}

export default PrivateRoute;