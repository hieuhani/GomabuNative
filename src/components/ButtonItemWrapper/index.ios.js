import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  itemWrapper: {
    padding: 11,
  },
  itemText: {
    letterSpacing: 1,
    fontSize: 12,
    color: 'white',
  },
});

class ButtonItemWrapper extends Component {
  render() {
    const { item, color } = this.props;
    if (!item) {
      return null;
    }

    let content;
    const { title, icon, layout, onPress } = item;

    if (layout !== 'icon' && title) {
      content = (
        <Text style={[styles.itemText, {color}]}>
          {title.toUpperCase()}
        </Text>
      );
    } else if (icon) {
      content = <Image source={icon} />;
    }

    return (
      <TouchableOpacity
        accessibilityLabel={title}
        accessibilityTraits="button"
        onPress={onPress}
        style={styles.itemWrapper}
      >
        {content}
      </TouchableOpacity>
    );
  }
}

export default ButtonItemWrapper;
