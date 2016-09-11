import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ScreenLogin from '../components/ScreenLogin';
import {
  signInWithFacebook,
  signInWithGoogle,
} from '../actions/login';
import {
  checkAuthStatus,
} from '../actions/user';

class Login extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated) {
      this.props.checkAuthStatus();
    }
  }
  render() {
    return (
      <ScreenLogin
        authErrorReason={this.props.authErrorReason}
        onFacebookSignIn={this.props.signInWithFacebook}
        onGoogleSignIn={this.props.signInWithGoogle}
      />
    );
  }
}

Login.propTypes = {
  checkAuthStatus: PropTypes.func,
  signInWithFacebook: PropTypes.func,
  signInWithGoogle: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    authenticated: state.login.authenticated,
    authErrorReason: state.login.authErrorReason,
  };
}

export default connect(mapStateToProps, {
  signInWithFacebook,
  signInWithGoogle,
  checkAuthStatus,
})(Login);
