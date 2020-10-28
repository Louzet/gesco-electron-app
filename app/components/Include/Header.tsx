import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../UI/Button';
import { RootState } from '../../store';
import { logout } from '../../actions/AuthAction';

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar is-spaced has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to={!authenticated ? '/' : '/dashboard'}
          >
            AppName
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-items">
            <Button
              text="Connectez-vous"
              onClick={logoutClickHandler}
              className="is-primary"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
