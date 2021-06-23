import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import icHome from '../../Assets/Images/home.png';
import icSearch from '../../Assets/Images/loupe.png';
import icUser2 from '../../Assets/Images/user2.png';
import icHome2 from '../../Assets/Images/home2.png';
import icSearch2 from '../../Assets/Images/loupe2.png';
import icUser from '../../Assets/Images/user.png';
import icChart from '../../Assets/Images/bar-chart.png';
import icChart2 from '../../Assets/Images/bar-chart2.png';
import icAlert from '../../Assets/Images/alert.png';
import icAlert2 from '../../Assets/Images/alert2.png';
import Dashboard from './Dashboard/Dashboard';
import Contact from './Contact/Contact';
import Results from './Results/Results';
import Chart from './Chart/Chart';

const Home = () => {
  const [selectedTab, setSelectedTab] = React.useState('Dashboard');

  const HandleSelectContact = () => {
    setSelectedTab('Contact');
  };

  return (
    <TabNavigator tabBarStyle={{height: 53}}>
      <TabNavigator.Item
        selected={selectedTab === 'Dashboard'}
        title={'Dashboard'}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={icHome} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icHome2} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('Dashboard')}>
        <Dashboard />
      </TabNavigator.Item>

      <TabNavigator.Item
        selected={selectedTab === 'Chart'}
        title={'Chart'}
        titleStyle={styles.tabTitle}
        renderIcon={() => (
          <Image source={icChart} style={styles.wrapperImage} />
        )}
        renderSelectedIcon={() => (
          <Image source={icChart2} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('Chart')}>
        <Chart />
      </TabNavigator.Item>

      <TabNavigator.Item
        selected={selectedTab === 'Results'}
        title={'Results'}
        titleStyle={styles.tabTitle}
        renderIcon={() => (
          <Image source={icAlert} style={styles.wrapperImage} />
        )}
        renderSelectedIcon={() => (
          <Image source={icAlert2} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('Results')}>
        <Results />
      </TabNavigator.Item>

      <TabNavigator.Item
        selected={selectedTab === 'Contact'}
        title={'User'}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={icUser} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icUser2} style={styles.wrapperImage} />
        )}
        onPress={() => HandleSelectContact()}>
        <Contact />
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
