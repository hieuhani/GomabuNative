import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

class LiveOffersView extends Component {
  render() {
    return (
      <View>
        <Text>
          This is MyAccountView
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {

})(LiveOffersView);
