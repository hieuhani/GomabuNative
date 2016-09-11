import {
  LoginManager,
  AccessToken,
} from 'react-native-fbsdk';
import { CALL_API, HTTP_METHODS } from '../middleware/api';

export const TOKEN_EXCHANGE_REQUEST = 'TOKEN_EXCHANGE_REQUEST';
export const TOKEN_EXCHANGE_SUCCESS = 'TOKEN_EXCHANGE_SUCCESS';
export const TOKEN_EXCHANGE_FAILURE = 'TOKEN_EXCHANGE_FAILURE';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export async function signInWithFacebook() {
  const loginResult  = await LoginManager.logInWithReadPermissions(['public_profile']);

  if (loginResult.isCancelled) {
    return {
      type: SIGN_IN_ERROR,
      payload: {
        reason: 'Sign in process was cancelled by user.',
      },
    };
  }

  const fbAccessToken = await AccessToken.getCurrentAccessToken();
  if (!fbAccessToken) {
    throw new Error('No access token');
  }

  return {
    [CALL_API]: {
      types: [TOKEN_EXCHANGE_REQUEST, TOKEN_EXCHANGE_SUCCESS, TOKEN_EXCHANGE_FAILURE],
      url: '/auth/token_exchange/',
      method: HTTP_METHODS.POST,
      params: {
        provider: 'facebook',
        access_token: fbAccessToken.accessToken,
      },
    }
  };
}

export const SIGN_IN_WITH_GOOGLE = 'SIGN_IN_WITH_GOOGLE';
export function signInWithGoogle() {
  return {
    type: SIGN_IN_WITH_GOOGLE,
  };
}
