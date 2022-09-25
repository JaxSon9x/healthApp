import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import HomePage from './containers/HomePage';
import theme from 'src/themes';
import loadable from '@loadable/component';
import PrivateRoute from 'src/layouts/PrivateRoute';
import { ProvideAuth } from 'src/layouts/ProvideAuth';

const LoginPage = loadable(() => import('src/containers/LoginPage'));
const ColumnPage = loadable(() => import('src/containers/ColumnPage'));
const MyRecordPage = loadable(() => import('src/containers/MyRecordPage'));

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ProvideAuth>
        <BrowserRouter>
          <Switch>
            {/* Private route */}
            <PrivateRoute path="/my-record">
              <MyRecordPage />
            </PrivateRoute>
            <PrivateRoute path="/my-diary">
              <HomePage />
            </PrivateRoute>
            {/* End private route */}

            {/* Public route */}
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <ColumnPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </ProvideAuth>
    </ThemeProvider>
  );
}

export default App;
