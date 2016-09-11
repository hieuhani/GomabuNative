import { realm } from '../middleware/storage';

const onlyOneAuthenticatedUser = 1;

export const CHECK_AUTH_STATUS = 'CHECK_AUTH_STATUS';
export function checkAuthStatus() {
  const gmbUsers = realm.objects('GMBUser');
  return {
    type: CHECK_AUTH_STATUS,
    payload: {
      authenticated: gmbUsers.length === onlyOneAuthenticatedUser,
    },
  };
}
