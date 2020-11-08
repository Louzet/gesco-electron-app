/* eslint react/jsx-props-no-spreading: off */
import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import routes from './constants/routes.json';

import App from './containers/App';
import Header from './components/Include/Header';

import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import DashboardPage from './containers/DashboardPage';

import PrivateRoute from './components/Auth/PrivateRoute';
import PublicRoute from './components/Auth/PublicRoute';

import {
  isAuthenticated,
  setLogout,
  setCurrentUser,
} from './actions/AuthAction';
import { User } from './constants/types/AuthType';

const Routes: FC = () => {
  const dispatch = useDispatch();

  if (isAuthenticated()) {
    const user: User | null = JSON.parse(window.localStorage.user || '{}');
    dispatch(setCurrentUser(user));
  } else {
    dispatch(setLogout());
  }

  return (
    <App>
      <Header />
      <Switch>
        <PublicRoute path={routes.LOGIN} component={LoginPage} exact />
        <PrivateRoute path={routes.HOME} component={HomePage} exact />
        <PrivateRoute path={routes.DASHBOARD} component={DashboardPage} exact />
      </Switch>
    </App>
  );
};

export default Routes;
