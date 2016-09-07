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

  handleAppStateChange(appState) {
    console.log(appState);
  }

  render() {
    // TODO: Remove ! for testing only
    if (this.props.isLoggedIn) {
      return <Login />;
    }

    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />
        <GMBNavigator />
      </View>
    );
  }
}

GMBApp.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
}

export default connect(mapStateToProps, {

})(GMBApp);
