import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import SearchID from '../SearchID';
import SearchPW from '../SearchPW';
import ResetPW from '../ResetPW';
import TabNavigator from './TabNavigator';
import {StatusBar} from 'react-native';
import MyPage from '../MyPage';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SearchID" component={SearchID} />
      <Stack.Screen name="SearchPW" component={SearchPW} />
      <Stack.Screen name="ResetPW" component={ResetPW} />
      <Stack.Screen name="TabbedScreen" component={TabNavigator} />
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
