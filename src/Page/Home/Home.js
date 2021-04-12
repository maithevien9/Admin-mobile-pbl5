import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import icHome from '../../Assets/Images/home.png';
import icSearch from '../../Assets/Images/loupe.png';
import icUser from '../../Assets/Images/user.png';
import icdata from '../../Assets/Images/dashboard.png';
import Dashboard from './Dashboard/Dashboard';

const Home = () => {
  const [selectedTab, setSelectedTab] = React.useState('Dashboard');

  const HandleSelectContact = () => {
    setSelectedTab('Contact');
  };

  const HandleSelectNotify = () => {
    setSelectedTab('Notify');
  };
  const HandleSelectCart = () => {
    setSelectedTab('Cart');
  };
  return (
    <TabNavigator tabBarStyle={{height: 53}}>
      <TabNavigator.Item
        selected={selectedTab === 'Dashboard'}
        title={'Dashboard'}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={icHome} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icHome} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('Dashboard')}>
        <Dashboard />
      </TabNavigator.Item>

      <TabNavigator.Item
        selected={selectedTab === 'Data'}
        title={'Data'}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={icdata} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icdata} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('Data')}>
        <Dashboard />
      </TabNavigator.Item>

      <TabNavigator.Item
        selected={selectedTab === 'Search'}
        title={'Search'}
        titleStyle={styles.tabTitle}
        renderIcon={() => (
          <Image source={icSearch} style={styles.wrapperImage} />
        )}
        renderSelectedIcon={() => (
          <Image source={icSearch} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('Search')}>
        <Dashboard />
      </TabNavigator.Item>

      <TabNavigator.Item
        selected={selectedTab === 'Contact'}
        title={'User'}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={icUser} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icUser} style={styles.wrapperImage} />
        )}
        onPress={() => HandleSelectContact()}>
        <Dashboard />
      </TabNavigator.Item>
    </TabNavigator>
  );
};
const styles = StyleSheet.create({
  wrapperImage: {height: 23, width: 23},
  tabTitle: {
    fontSize: 10,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});

export default Home;
