import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StatusBar,
  Animated,
  Text,
  Platform,
} from 'react-native';
import styles from './styles';

class ViewListContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      idx: this.props.selectedSegment || 0,
      anim: new Animated.Value(0),
      stickyHeaderHeight: 0,
    };

    this.renderFakeHeader = this.renderFakeHeader.bind(this);
    this.handleStickyHeaderLayout = this.handleStickyHeaderLayout.bind(this);
    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleSelectSegment = this.handleSelectSegment.bind(this);
    this.references = [];
  }

  render() {
    let { leftItem } = this.props;
    if (!leftItem && Platform.OS === 'android') {
      leftItem = {
        title: 'Menu',
        icon: this.context.hasUnreadNotifications
          ? require('../../common/images/hamburger-unread.png')
          : require('../../common/images/hamburger.png'),
        onPress: this.handleShowMenu,
      };
    }

    let segments = [];
    const content = React.Children.map(this.props.children, (child, idx) => {
      segments.push(child.props.title);
      return React.cloneElement(child, {
        automaticallyAdjustContentInsets: false,
        contentInset: { bottom: 49, top: 0 },
        ref: (ref) => { this.references[idx] = ref; },
        renderHeader: this.renderFakeHeader,
        scrollEventThrottle: 16,
        scrollsToTop: idx === this.state.idx,
        showsVerticalScrollIndicator: false,
        style: styles.listView,
        onScroll: (e) => this.handleScroll(idx, e),
      });
    });

    let { stickyHeader } = this.props;
    if (segments.length > 1) {
      stickyHeader = (
        <View>
          <Text>This place is for sticky header</Text>
        </View>
      );
    }

    const backgroundShift = segments.length === 1 ? 0 : this.state.idx / (segments.length - 1);

    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>

        </View>
      </View>
    );
  }

  handleScroll() {
  }
  renderFakeHeader() {
  }
  handleStickyHeaderLayout() {
  }
  handleSelectSegment() {
  }
  handleShowMenu() {
  }
}

ViewListContainer.propTypes = {
};

export default ViewListContainer;
