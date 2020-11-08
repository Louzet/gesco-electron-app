export const AUTH_SET_CURRENT_USER = 'AUTH_SET_CURRENT_USER';
export const AUTH_SET_REQUEST = 'AUTH_SET_REQUEST';
export const AUTH_SET_SUCCESS = 'AUTH_SET_SUCCESS';
export const AUTH_SET_ERROR = 'AUTH_SET_ERROR';
export const AUTH_SET_LOADING = 'AUTH_SET_LOADING';
export const AUTH_SET_LOGOUT = 'AUTH_SET_LOGOUT';

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  sex: string;
  createdAt: Date | string;
  iat: number;
  exp: number;
}

export interface AuthState {
  user: User | null;
  credentials: Record<string, string>;
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
interface SetCurrentUserAction {
  type: typeof AUTH_SET_CURRENT_USER;
  payload: User | null;
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
  payload: LoginData;
}

interface SetLogoutAction {
  type: typeof AUTH_SET_LOGOUT;
}

interface SetSuccessAction {
  type: typeof AUTH_SET_SUCCESS;
  payload: Record<number, string>;
}

export type AuthAction =
  | SetCurrentUserAction
  | SetLoadingAction
  | SetLogoutAction
  | SetRequestAction
  | SetErrorAction
  | SetSuccessAction;
