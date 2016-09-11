import { combineReducers } from 'redux';
import user from './user';
import navigation from './navigation';
import login from './login';

const rootReducer = combineReducers({
  user,
  navigation,
  login,
});

export default rootReducer;
