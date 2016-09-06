import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  Animated,
} from 'react-native';
import { styles } from './styles';
import ButtonGMB from '../ButtonGMB';

class ScreenLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
    };
    this.handleFacebookSignIn = () => {
    };
    this.handleGoogleSignIn = () => {
    };
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  render() {
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
              caption="Sign in with Facebook"
              icon={require('./images/LoginFacebookIcon.png')}
              onPress={this.handleFacebookSignIn}
              style={styles.margin}
            />
            <ButtonGMB
              background={styles.google}
              caption="Sign in with Google"
              icon={require('./images/LoginGoogleIcon.png')}
              onPress={this.handleGoogleSignIn}
              style={styles.margin}
            />
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

export default ScreenLogin;
