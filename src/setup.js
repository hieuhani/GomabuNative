import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GMBApp from './GMBApp';
import configureStore from './store/configureStore';

export default function setup() {
  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }

    render() {
      if (this.state.isLoading) {
        return null;
      }
      return (
        <Provider store={this.state.store}>
          <GMBApp/>
        </Provider>
      );
    }
  }

  return <Root/>;
}
