import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Navigator,
  Text,
  Image,
} from 'react-native';
import switchTab from '../../actions/navigation';
import GMBColors from '../../common/GMBColors';
import ActivityLogView from './ActivityLog/ActivityLogView';
import HomeView from './Home/HomeView';
import LiveOffersView from './LiveOffers/LiveOffersView';
import NotificationsView from './Notifications/NotificationsView';
import GMBDrawerLayout from '../../common/GMBDrawerLayout';
import ViewMenuItem from '../../components/ViewMenuItem';

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'flex-end',
    backgroundColor: '#959595',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
  },
});

class GMBTabView extends Component {
  constructor(props) {
    super(props);

    this.renderNavigationView = this.renderNavigationView.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }
  getChildContext() {
    return {
      openDrawer: this.openDrawer,
    };
  }

  openDrawer() {
    this.refs.drawer.openDrawer();
  }

  onTabSelect(tab) {
    if (this.props.tab !== tab) {
      this.props.switchTab(tab);
    }
    this.refs.drawer.closeDrawer();
  }

  renderNavigationView() {
    return (
      <View style={styles.drawer}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={require('../../common/images/Logo.png')}
          />
          <Text style={styles.name}>
            {'Hieu Tran Duc'.toUpperCase()}
          </Text>
        </View>
        <ViewMenuItem
          icon={require('./Home/images/HomeIcon.png')}
          iconColor={GMBColors.mainColor}
          onPress={this.onTabSelect.bind(this, 'Home')}
          selected={this.props.tab === 'Home'}
          selectedIcon={require('./Home/images/HomeIcon.png')}
          title="Home"
        />
        <ViewMenuItem
          icon={require('./ActivityLog/images/ActivityIcon.png')}
          iconColor={GMBColors.mainColor}
          onPress={this.onTabSelect.bind(this, 'ActivityLog')}
          selected={this.props.tab === 'ActivityLog'}
          selectedIcon={require('./ActivityLog/images/ActivityIcon.png')}
          title="Activity Log"
        />
        <ViewMenuItem
          icon={require('./Notifications/images/NotificationIcon.png')}
          iconColor={GMBColors.mainColor}
          onPress={this.onTabSelect.bind(this, 'Notifications')}
          selected={this.props.tab === 'Notifications'}
          selectedIcon={require('./Notifications/images/NotificationIcon.png')}
          title="Notifications"
          badge="10"
        />
        <ViewMenuItem
          icon={require('./LiveOffers/images/LiveOffersIcon.png')}
          iconColor={GMBColors.mainColor}
          onPress={this.onTabSelect.bind(this, 'LiveOffers')}
          selected={this.props.tab === 'LiveOffers'}
          selectedIcon={require('./LiveOffers/images/LiveOffersIcon.png')}
          title="Live Offers"
        />
      </View>
    );
  }

  renderContent() {
    switch (this.props.tab) {
    case 'Home':
      return (
        <HomeView />
      );
    case 'ActivityLog':
      return (
        <ActivityLogView />
      );
    case 'Notifications':
      return (
        <NotificationsView />
      );
    case 'LiveOffers':
      return (
        <LiveOffersView />
      );
    default:
      throw new Error(`Unknown tab ${this.props.tab}`);
    }
  }

  render() {
    return (
      <GMBDrawerLayout
        ref="drawer"
        drawerPosition="left"
        drawerWidth={260}
        renderNavigationView={this.renderNavigationView}
      >
        <View style={styles.content} key={this.props.tab}>
          {this.renderContent()}
        </View>
      </GMBDrawerLayout>
    );
  }
}

GMBTabView.propTypes = {
  tab: PropTypes.string,
  switchTab: PropTypes.func,
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};

GMBTabView.childContextTypes = {
  openDrawer: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    tab: state.navigation.tab,
  };
}

export default connect(mapStateToProps, {
  switchTab,
})(GMBTabView);
