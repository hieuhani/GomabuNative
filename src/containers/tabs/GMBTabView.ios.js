import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  TabBarIOS,
  Navigator,
} from 'react-native';
import switchTab from '../../actions/navigation';
import GMBColors from '../../common/GMBColors';
import ActivityLogView from './ActivityLog/ActivityLogView';
import HomeView from './Home/HomeView';
import LiveOffersView from './LiveOffers/LiveOffersView';
import MyAccountView from './MyAccount/MyAccountView';
import NotificationsView from './Notifications/NotificationsView';

class GMBTabView extends Component {

  onTabSelect(tab) {
    if (this.props.tab !== tab) {
      this.props.switchTab(tab);
    }
  }
  render() {
    return (
      <TabBarIOS tintColor={GMBColors.mainColor}>
        <TabBarIOS.Item
          icon={require('./MyAccount/images/AccountIcon.png')}
          onPress={this.onTabSelect.bind(this, 'MyAccount')}
          selected={this.props.tab === 'MyAccount'}
          selectedIcon={require('./MyAccount/images/AccountIcon.png')}
          title="My Account"
        >
          <MyAccountView
            navigator={this.props.navigator}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./ActivityLog/images/ActivityIcon.png')}
          onPress={this.onTabSelect.bind(this, 'ActivityLog')}
          selected={this.props.tab === 'ActivityLog'}
          selectedIcon={require('./ActivityLog/images/ActivityIcon.png')}
          title="Activity Log"
        >
          <ActivityLogView
            navigator={this.props.navigator}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./Home/images/HomeIcon.png')}
          onPress={this.onTabSelect.bind(this, 'Home')}
          selected={this.props.tab === 'Home'}
          selectedIcon={require('./Home/images/HomeIcon.png')}
          title="Home"
        >
          <HomeView
            navigator={this.props.navigator}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./Notifications/images/NotificationIcon.png')}
          onPress={this.onTabSelect.bind(this, 'Notifications')}
          selected={this.props.tab === 'Notifications'}
          selectedIcon={require('./Notifications/images/NotificationIcon.png')}
          title="Notifications"
        >
          <NotificationsView
            navigator={this.props.navigator}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./LiveOffers/images/LiveOffersIcon.png')}
          onPress={this.onTabSelect.bind(this, 'LiveOffers')}
          selected={this.props.tab === 'LiveOffers'}
          selectedIcon={require('./LiveOffers/images/LiveOffersIcon.png')}
          title="Live Offers"
        >
          <LiveOffersView
            navigator={this.props.navigator}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

GMBTabView.propTypes = {
  tab: PropTypes.string,
  switchTab: PropTypes.func,
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};

function mapStateToProps(state) {
  return {
    tab: state.navigation.tab,
  };
}

export default connect(mapStateToProps, {
  switchTab,
})(GMBTabView);
