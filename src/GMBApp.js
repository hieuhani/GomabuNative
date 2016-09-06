import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppState,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Login from './containers/Login';


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
    if (!this.props.isLoggedIn) {
      return <Login />;
    }

    return (
      <View style={styles.container}>
        <Text>Hello from Gomabu</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
  }
}

export default connect(mapStateToProps, {

})(GMBApp);
