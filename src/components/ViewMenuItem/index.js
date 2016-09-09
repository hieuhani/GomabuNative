import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from './styles';
import GMBTouchable from '../../common/GMBTouchable';

class ViewMenuItem extends Component {
  render() {
    const icon = this.props.selected ? this.props.selectedIcon : this.props.icon;
    const selectedTitleStyle = this.props.selected && styles.selectedTitle;
    let badge;
    if (this.props.badge) {
      badge = (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {this.props.badge}
          </Text>
        </View>
      );
    }
    return (
      <GMBTouchable onPress={this.props.onPress}>
        <View style={[styles.container, this.props.selected ? { backgroundColor: '#EEE' } : {}]}>
          <Image
            source={icon}
            style={[styles.icon, { tintColor: this.props.iconColor }]}
          />
          <Text style={[styles.title, selectedTitleStyle]}>
            {this.props.title}
          </Text>
          {badge}
        </View>
      </GMBTouchable>
    );
  }
}

ViewMenuItem.propTypes = {
  selected: PropTypes.bool,
  selectedIcon: PropTypes.number,
  icon: PropTypes.number,
  badge: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string,
  iconColor: PropTypes.string,
};

export default ViewMenuItem;
