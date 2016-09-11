import Realm from 'realm';
import _ from 'lodash';
import * as LoginActionTypes from '../actions/login';

const GMBUserSchema = {
  name: 'GMBUser',
  properties: {
    email: 'string',
    id: 'int',
    accessToken: 'string',
  },
};

export const realm = new Realm({
  schema: [GMBUserSchema],
});

export default store => next => action => {
  switch (action.type) {
  case LoginActionTypes.TOKEN_EXCHANGE_SUCCESS: {
    const { response } = action;
    let isCorrectResponse = true;
    for (const property of ['authenticated_email', 'authenticated_id', 'gmb_access_token']) {
      if (!_.has(response, property)) {
        isCorrectResponse = false;
        break;
      }
    }
    if (isCorrectResponse) {
      realm.write(() => {
        realm.deleteAll();
        realm.create('GMBUser', {
          email: _.get(response, 'authenticated_email'),
          id: _.get(response, 'authenticated_id'),
          accessToken: _.get(response, 'gmb_access_token'),
        });
      });
    }
    break;
  }
  default:
    break;
  }

  next(action);
};
