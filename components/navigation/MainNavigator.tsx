import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import BoardNavigator from './BoardNavigator';
import SearchID from '../SearchID';
import SearchPW from '../SearchPW';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SearchID" component={SearchID} />
      <Stack.Screen name="SearchPW" component={SearchPW} />
      <Stack.Screen name="Board" component={BoardNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
