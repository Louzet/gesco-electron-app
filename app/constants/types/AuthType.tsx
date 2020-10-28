export const AUTH_SET_USER = 'AUTH_SET_USER';
export const AUTH_SET_REQUEST = 'AUTH_SET_REQUEST';
export const AUTH_SET_SUCCESS = 'AUTH_SET_SUCCESS';
export const AUTH_SET_ERROR = 'AUTH_SET_ERROR';
export const AUTH_SET_LOADING = 'AUTH_SET_LOADING';
export const AUTH_SET_SIGN_OUT = 'AUTH_SET_SIGN_OUT';

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  sex: string;
  createdAt: Date | string;
}

export interface AuthState {
  user: User | null;
  authenticated: boolean;
  loading: boolean;
  error: {
    code: number;
    message: string;
  };
  success: {
    code: number;
    message: string;
  };
}

export interface LoginData {
  email: string;
  password: string;
}

// ACTIONS
interface SetUserAction {
  type: typeof AUTH_SET_USER;
  payload: User;
}

interface SetLoadingAction {
  type: typeof AUTH_SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: typeof AUTH_SET_ERROR;
  payload: Record<number, string>;
}

interface SetRequestAction {
  type: typeof AUTH_SET_REQUEST;
  payload: boolean;
}

interface SetSignOutAction {
  type: typeof AUTH_SET_SIGN_OUT;
}

interface SetSuccessAction {
  type: typeof AUTH_SET_SUCCESS;
  payload: Record<number, string>;
}

export type AuthAction =
  | SetUserAction
  | SetLoadingAction
  | SetSignOutAction
  | SetRequestAction
  | SetErrorAction
  | SetSuccessAction;
