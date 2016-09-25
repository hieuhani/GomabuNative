import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StatusBar,
  Animated,
  Text,
} from 'react-native';
import ViewListContainer from '../ViewListContainer';
import styles from './styles';

class ScreenMyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const profilePicture = (
      <Image
        source={require('../../common/images/Logo.png')}
        style={styles.avatar}
      />
    );

    return (
      <ViewListContainer
        backgroundColor="#A8D769"
        backgroundImage={require('../../common/images/BackgroundPattern.png')}
        parallaxContent={profilePicture}
        title="My Account"
      >
        {this.renderContent()}
      </ViewListContainer>
    );
  }

  renderContent() {
    return (
      <View>
        <Text style={{ color: 'white' }}>
          Wwaaaa
        </Text>
      </View>
    );
  }
}

ScreenMyAccount.propTypes = {
};

export default ScreenMyAccount;
