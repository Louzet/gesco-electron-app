import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { RootState } from '../../store';

interface Props extends RouteProps {
  component: any;
}

const PublicRoute: FC<Props> = ({ component: Component, ...rest }: Props) => {
  const { authenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={
        (props) =>
          // eslint-disable-next-line react/jsx-props-no-spreading
          !authenticated ? (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Component {...props} />
          ) : (
            <Redirect to="/dashboard" />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
};

export default PublicRoute;
