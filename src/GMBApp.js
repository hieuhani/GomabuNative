import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  AppState,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Login from './containers/Login';
import GMBNavigator from './containers/GMBNavigator';
import {
  checkAuthStatus,
} from './actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class GMBApp extends Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  componentWillMount() {
    this.props.checkAuthStatus();
  }

  handleAppStateChange(appState) {
    console.log(appState);
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <Login />;
    }

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
          translucent
        />
        <GMBNavigator />
      </View>
    );
  }
}

GMBApp.propTypes = {
  checkAuthStatus: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
}

export default connect(mapStateToProps, {
  checkAuthStatus,
})(GMBApp);
