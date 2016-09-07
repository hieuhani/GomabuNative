import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Navigator,
  Platform,
} from 'react-native';
import GMBTabView from './tabs/GMBTabView.ios';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
};

class GMBNavigator extends Component {
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

export default connect(mapStateToProps, {

})(GMBNavigator);
