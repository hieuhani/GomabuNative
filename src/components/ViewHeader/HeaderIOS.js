import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './styles';

class HeaderIOS extends Component {
  render() {
    const { leftItem, title, rightItem, foreground } = this.props;
    const titleColor = foreground === 'dark' ? '#032250' : 'white';
    const itemsColor = foreground === 'dark' ? '#7F91A7' : 'white';

    const content = React.Children.count(this.props.children) === 0
      ? <Text>{title}</Text>
      : this.props.children;

    return (
      <View style={[styles.header, this.props.style]}>
        <View style={styles.leftItem}>

        </View>
      </View>
    );
  }
}

export default HeaderIOS;
