import React, { createContext, useContext } from 'react';

export const AuthenContext = createContext({
  user: '',
  signinFn: () => null,
  signoutFn: () => null
});

export const useAuth = () => {
  return useContext(AuthenContext);
}
