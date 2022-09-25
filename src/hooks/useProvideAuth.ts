import React, { useState } from 'react';

const fakeAuth = {
  isAuthenticated: false,
  signin: (cb: any) => {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout: (cb: any) => {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export const useProvideAuth = (): {
  user: any,
  signinFn: any,
  signoutFn: any
} => {
  const [user, setUser] = useState<any>(null);

  const signinFn = (cb: any) => {
    return fakeAuth.signin(() => {
      setUser('user');
      cb();
    });
  };

  const signoutFn = (cb: any) => {
    return fakeAuth.signout(() => {
      setUser('');
      cb();
    });
  };

  return {
    user,
    signinFn,
    signoutFn
  };
};