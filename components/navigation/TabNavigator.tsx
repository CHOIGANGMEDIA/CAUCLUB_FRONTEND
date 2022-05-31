import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BoardNavigator from './BoardNavigator';
import ProfileList from '../Profile/ProfileList';
import ChatList from '../ChatList';
import Archieve from '../Profile/Archieve';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Ranking" component={ProfileList} />
      <Tab.Screen name="Archive" component={Archieve} />
      <Tab.Screen name="Board" component={BoardNavigator} />
      {/* TODO profile Navigator */}
      <Tab.Screen name="Chat" component={ChatList} />
      <Tab.Screen name="Profile" component={ProfileList} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
