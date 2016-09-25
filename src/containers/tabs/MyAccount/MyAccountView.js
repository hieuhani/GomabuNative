import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScreenMyAccount from '../../../components/ScreenMyAccount';

class MyAccountView extends Component {
  render() {
    return (
      <ScreenMyAccount/>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {

})(MyAccountView);
