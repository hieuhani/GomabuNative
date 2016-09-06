import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppState,
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Gomabu and this is login screen</Text>
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

  }
}

export default connect(mapStateToProps, {

})(Login);
