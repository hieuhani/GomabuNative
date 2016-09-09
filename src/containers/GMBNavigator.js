import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Navigator,
  Platform,
  BackAndroid,
} from 'react-native';
import GMBTabView from './tabs/GMBTabView';
import switchTab from '../actions/navigation';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
};

class GMBNavigator extends Component {
  constructor() {
    super();
    this.handlers = [];
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener,
    };
  }

  addBackButtonListener = (listener) => {
    this.handlers.push(listener);
  };

  removeBackButtonListener = (listener) => {
    this.handlers = this.handlers.filter((handler) => handler !== listener);
  };

  handleBackButton() {
    for (let i = this.handlers.length - 1; i >= 0; i--) {
      if (this.handlers[i]()) {
        return true;
      }
    }

    const { navigator } = this.refs;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    if (this.props.tab !== 'Home') {
      this.props.switchTab('Home');
      return true;
    }
    return false;
  }

  renderScene(route, navigator) {
    return <GMBTabView navigator={navigator} />;
  }
  render() {
    return (
      <Navigator
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        initialRoute={{}}
        ref="navigator"
        renderScene={this.renderScene}
        style={styles.container}
      />
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

GMBNavigator.childContextTypes = {
  addBackButtonListener: PropTypes.func,
  removeBackButtonListener: PropTypes.func,
};

export default connect(mapStateToProps, {
  switchTab
})(GMBNavigator);
