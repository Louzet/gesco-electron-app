import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { API_LOGIN } from '../entrypoint';
import {
  User,
  LoginData,
  AuthAction,
  AUTH_SET_CURRENT_USER,
  AUTH_SET_LOADING,
  AUTH_SET_REQUEST,
  AUTH_SET_ERROR,
  AUTH_SET_SUCCESS,
  AUTH_SET_LOGOUT,
} from '../constants/types/AuthType';
import { RootState } from '../store';

// Error
export const setError = (
  code: number,
  message: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SET_ERROR,
      payload: {
        code,
        message,
      },
    });
  };
};

// success
export const setSuccess = (
  code: number,
  message: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SET_SUCCESS,
      payload: {
        code,
        message,
      },
    });
  };
};

// Loading
export const setLoading = (
  value: boolean
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SET_LOADING,
      payload: value,
    });
  };
};

// Request
export const setRequest = (
  credentials: LoginData
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SET_REQUEST,
      payload: credentials,
    });
  };
};

export const setCurrentUser = (
  user: User | null
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SET_CURRENT_USER,
      payload: user,
    });
  };
};

export const setAxiosToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

// Logout
export const setLogout = (): ThunkAction<
  void,
  RootState,
  null,
  AuthAction
> => async (dispatch) => {
  window.localStorage.removeItem('authorization-token');
  window.localStorage.removeItem('user');
  delete axios.defaults.headers.Authorization;

  return dispatch({
    type: AUTH_SET_LOGOUT,
  });
};

// login
export const login = (
  credentials: LoginData
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    dispatch(setRequest(credentials));
    dispatch(setLoading(true));

    try {
      const response = await axios.post(API_LOGIN, credentials);
      const { data } = response;
      // Pour stocker le token dans le localStorage
      window.localStorage.setItem('authorization-token', data.token);

      // Pour stocker le user
      window.localStorage.setItem('user', JSON.stringify(data.user));

      // Pour envoyer le token à axios afin de la stocker dans header par default de toutes les rêquetes
      setAxiosToken(data.token);
      dispatch(setCurrentUser(data.user));

      dispatch(setLoading(false));
    } catch (error) {
      if (error.response) {
        dispatch(setLoading(false));
        dispatch(setError(error.response.data, error.response.data.message));
      }
    }
  };
};

export const isAuthenticated = () => {
  const token = window.localStorage.getItem('authorization-token');

  if (!token) {
    return false;
  }

  let decoded;

  try {
    decoded = jwtDecode(token);
    const { exp: expiration } = decoded;
    const currentDate = new Date();

    return expiration * 1000 - currentDate.getTime() > 1;
  } catch (error) {
    return false;
  }
};
