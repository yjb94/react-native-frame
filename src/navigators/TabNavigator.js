import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import * as Tab from '../screens/Tabs';
import React from 'react';
import TabIcon from '../components/view/icon/TabIcon';
import colors from '../colors/colors';
import {TabName} from '../constants/const';

const defaultNavOptions = ({navigation}) => {
  const {routeName} = navigation.state;

  switch (routeName) {
    default:
      return {
        title: TabName[routeName],
        tabBarIcon: ({focused}) => {
          return <TabIcon type={routeName} focused={focused} />;
        },
        tabBarOptions: {
          activeTintColor: colors.main,
          inactiveTinitColor: colors.inactive,
          labelStyle: {
            fontSize: 10,
          },
        },
        style: {
          backgroundColor: 'white',
        },
      };
  }
};

let Tabs = {
  Home: {screen: Tab.HomeTab, navigationOptions: defaultNavOptions},
  Upload: {screen: Tab.UploadTab, navigationOptions: defaultNavOptions},
  Message: {screen: Tab.MessageTab, navigationOptions: defaultNavOptions},
  MyPage: {screen: Tab.MyPageTab, navigationOptions: defaultNavOptions},
};

export const TabsConfig = Object.keys(Tabs).reduce((acc, cur) => {
  acc[cur] = cur;
  return acc;
}, {});

const TabNavigator = createBottomTabNavigator(Tabs, {
  initialRouteName: TabsConfig.Home,
  lazy: false,
});

export default createAppContainer(TabNavigator);
