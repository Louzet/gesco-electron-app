import {
  AuthAction,
  AuthState,
  AUTH_SET_CURRENT_USER,
  AUTH_SET_LOADING,
  AUTH_SET_LOGOUT,
  AUTH_SET_REQUEST,
  AUTH_SET_ERROR,
  AUTH_SET_SUCCESS,
} from '../constants/types/AuthType';
import { ErrorResponse, SuccessResponse } from '../constants/Common';

const errorResponse: ErrorResponse = {
  type: 'error',
  code: 0,
  message: '',
};

const successResponse: SuccessResponse = {
  type: 'success',
  code: 200,
  message: '',
};

const initialState: AuthState = {
  user: null,
  credentials: {},
  authenticated: false,
  loading: false,
  error: errorResponse,
  success: successResponse,
};

export default (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false,
      };
    case AUTH_SET_LOGOUT:
      return {
        ...state,
        user: null,
        authenticated: false,
        loading: false,
      };
    case AUTH_SET_REQUEST:
      return {
        ...state,
        loading: true,
        credentials: action.payload,
      };
    case AUTH_SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case AUTH_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case AUTH_SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};
