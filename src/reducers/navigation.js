import _ from 'lodash';
import * as NotificationActionTypes from '../actions/navigation';

const initialState = {
  tab: 'Home',
};

export default function navigation(state = initialState, action) {
  const { type } = action;
  switch (type) {
  case NotificationActionTypes.SWITCH_TAB:
    return _.assign({}, state, {
      tab: action.tab,
    });
  default:
    return state;
  }
}
