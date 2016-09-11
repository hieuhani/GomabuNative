import _ from 'lodash';
import * as UserActionTypes from '../actions/user';

const initialState = {
  isLoggedIn: false,
};

export default function user(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case UserActionTypes.CHECK_AUTH_STATUS: {
    return _.assign({}, state, {
      isLoggedIn: payload.authenticated,
    });
  }
  default:
    return state;
  }
}
