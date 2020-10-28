import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import counterReducer from './features/counter/counterSlice';
import authReducer from './reducers/AuthReducer';

const createRootReducer: any = (history: History) => {
  return combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    auth: authReducer,
  });
};

export default createRootReducer;
