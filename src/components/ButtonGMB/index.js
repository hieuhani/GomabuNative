import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

class ButtonGMB extends Component {
  render() {
    const caption = this.props.caption;
    let icon;
    if (this.props.icon) {
      icon = (
        <Image
          source={this.props.icon}
          style={styles.icon}
        />
      );
    }

    const content = (
      <View style={[styles.button, this.props.background]}>
        {icon}
        <Text style={[styles.caption]}>
          {caption}
        </Text>
      </View>
    );

    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[styles.container, this.props.style]}
      >
        {content}
      </TouchableOpacity>
    );
  }
}

ButtonGMB.propTypes = {
  caption: PropTypes.string.isRequired,
  icon: PropTypes.number,
  onPress: PropTypes.func.isRequired,
};

export default ButtonGMB;
