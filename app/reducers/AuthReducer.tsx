import {
  AuthAction,
  AuthState,
  AUTH_SET_USER,
  AUTH_SET_LOADING,
  AUTH_SET_SIGN_OUT,
  AUTH_SET_REQUEST,
  AUTH_SET_ERROR,
  AUTH_SET_SUCCESS,
} from '../constants/types/AuthType';

const initialState: AuthState = {
  user: null,
  authenticated: false,
  loading: false,
  error: {
    code: 0,
    message: '',
  },
  success: {
    code: 0,
    message: '',
  },
};

export default (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    case AUTH_SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case AUTH_SET_SIGN_OUT:
      return {
        ...state,
        user: null,
        authenticated: false,
        loading: false,
      };
    case AUTH_SET_REQUEST:
      return {
        ...state,
        loading: action.payload,
      }
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
