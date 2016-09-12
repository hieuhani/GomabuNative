import _ from 'lodash';
import * as LoginActionTypes from '../actions/login';
import * as UserActionTypes from '../actions/user';

const initialState = {
  authenticated: false,
  authErrorReason: '',
};

export default function login(state = initialState, action) {
  const { type } = action;
  switch (type) {
  case LoginActionTypes.TOKEN_EXCHANGE_REQUEST: {
    return _.assign({}, state, {
      authenticated: initialState.authenticated,
      authErrorReason: initialState.authErrorReason,
    });
  }
  case LoginActionTypes.TOKEN_EXCHANGE_SUCCESS: {
    return _.assign({}, state, {
      authenticated: true,
      authErrorReason: initialState.authErrorReason,
    });
  }
  case LoginActionTypes.TOKEN_EXCHANGE_FAILURE:
  case LoginActionTypes.SIGN_IN_ERROR: {
    return _.assign({}, state, {
      authenticated: false,
      authErrorReason: _.get(action, 'payload.reason') || 'Unexpected error. Please try again.',
    });
  }
  case UserActionTypes.CHECK_AUTH_STATUS: {
    return _.assign({}, state, {
      authErrorReason: initialState.authErrorReason,
    });
  }
  default:
    return state;
  }
}
