import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScreenLogin from '../components/ScreenLogin';

class Login extends Component {
  render() {
    return (
      <ScreenLogin/>
    )
  }
}


function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {

})(Login);
