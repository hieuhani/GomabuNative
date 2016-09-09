import React from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

function GMBTouchableIOS(props) {
  return (
    <TouchableHighlight
      accessibilityTraits="button"
      underlayColor="#3C5EAE"
      {...props}
    />
  );
}

const GMBTouchable = Platform.OS === 'android'
  ? TouchableNativeFeedback
  : GMBTouchableIOS;

export default GMBTouchable;
