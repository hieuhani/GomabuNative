import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StatusBar,
  Animated,
  Text,
} from 'react-native';

import { styles } from './styles';
import ButtonGMB from '../ButtonGMB';

class ScreenLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
      isFacebookSigningIn: false,
      isGoogleSigningIn: false,
    };
    this.handleFacebookSignIn = () => {
      if (this.state.isFacebookSigningIn) {
        return;
      }
      this.setState({
        isFacebookSigningIn: true,
      });
      this.props.onFacebookSignIn();
    };
    this.handleGoogleSignIn = () => {
      if (this.state.isGoogleSigningIn) {
        return;
      }
      this.setState({
        isGoogleSigningIn: true,
      });
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authErrorReason.length > 0) {
      this.setState({
        isFacebookSigningIn: false,
        isGoogleSigningIn: false,
      });
    }
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  render() {
    const { isFacebookSigningIn, isGoogleSigningIn } = this.state;
    return (
      <Image
        source={require('./images/BackgroundLogin.png')}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.overlay}>
          <View style={styles.section}>
            <Animated.Image
              source={require('../../common/images/Logo.png')}
              style={[styles.logo, this.fadeIn(0)]}
            />
            <Animated.Text style={[styles.brandName, this.fadeIn(700, 10)]}>
              Gomabu
            </Animated.Text>
          </View>
          <Animated.View style={[styles.section, styles.sectionLogin, this.fadeIn(700, -20)]}>
            <ButtonGMB
              background={styles.facebook}
              caption={!isFacebookSigningIn ? 'Sign in with Facebook' : 'Please wait...'}
              icon={require('./images/LoginFacebookIcon.png')}
              onPress={this.handleFacebookSignIn}
              style={styles.margin}
            />
            <ButtonGMB
              background={styles.google}
              caption={!isGoogleSigningIn ? 'Sign in with Google' : 'Please wait...'}
              icon={require('./images/LoginGoogleIcon.png')}
              onPress={this.handleGoogleSignIn}
              style={styles.margin}
            />
            {this.props.authErrorReason.length > 0 && <Text style={styles.errorMessage}>
              {this.props.authErrorReason}
            </Text>}
          </Animated.View>
        </View>
      </Image>
    );
  }

  fadeIn(delay, from = 0) {
    const { anim } = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }
}

ScreenLogin.propTypes = {
  authErrorReason: PropTypes.string,
  onFacebookSignIn: PropTypes.func.isRequired,
  onGoogleSignIn: PropTypes.func.isRequired,
};

export default ScreenLogin;
