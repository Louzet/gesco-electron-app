/* eslint react/jsx-props-no-spreading: off */
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import routes from './constants/routes.json';

import App from './containers/App';

import Header from './components/Include/Header';

import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import DashboardPage from './containers/DashboardPage';

import PrivateRoute from './components/Auth/PrivateRoute';
import PublicRoute from './components/Auth/PublicRoute';

import Loader from './components/UI/Loader';

import { setLoading } from './actions/AuthAction';

import { RootState } from './store';

const Routes: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  // check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
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
