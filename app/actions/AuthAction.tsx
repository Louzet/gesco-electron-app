import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
// import { API_ENTRYPOINT } from '../entrypoint';
import {
  LoginData,
  AuthAction,
  AuthState,
  AUTH_SET_USER,
  AUTH_SET_LOADING,
  AUTH_SET_SIGN_OUT,
  AUTH_SET_REQUEST,
  AUTH_SET_ERROR,
  AUTH_SET_SUCCESS,
} from '../constants/types/AuthType';
import { RootState } from '../store';

// Error
export const setError = (
  code: number,
  message: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch: any) => {
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
  return (dispatch: any) => {
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
  return (dispatch: any) => {
    dispatch({
      type: AUTH_SET_LOADING,
      payload: value,
    });
  };
};

// Login
export const login = (
  _data: LoginData,
  onError: () => void
): ThunkAction<void, RootState, null, AuthAction> => async (dispatch: any) => {
  dispatch({
    type: AUTH_SET_REQUEST,
    payload: true,
  });
  console.log(`${process.env.APP_ENTRYPOINT}`);

  return (
    axios
      .post(`http://localhost:8000/api/login_check`, _data)
      // eslint-disable-next-line promise/always-return
      .then((response) => {
        console.log(response);
        dispatch(setSuccess(200, 'connected successfully.'));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        console.log(error);
        if (error.response) {
          console.log(error);
          onError();
          return dispatch(setError(error.code, error.message));
        }
        return dispatch(setError(503, 'Server unreachable for the moment'));
      })
  );
};

// Logout
export const logout = (): ThunkAction<
  void,
  RootState,
  null,
  AuthAction
> => async (dispatch: any) => {
  // try {
  //   dispatch(setLoading(true));
  //   dispatch({
  //     type: AUTH_SET_SIGN_OUT,
  //   });
  //   axios.get(`${process.env.API_ENTRYPOINT}/logout`);
  // } catch (error) {
  //   console.log(error);
  //   dispatch(setLoading(false));
  // }
  return (
    axios
      .get(`${process.env.API_ENTRYPOINT}/logout`)
      .then((response) => {

      })
    )
};
