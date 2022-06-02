import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BoardList from '../BoardList';
import BoardScreen from '../BoardScreen';
import BoardModify from '../BoardModify';

const Stack = createStackNavigator();

const BoardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BoardList" component={BoardList} />
      <Stack.Screen name="BoardScreen" component={BoardScreen} />
      <Stack.Screen name="BoardModify" component={BoardModify} />
    </Stack.Navigator>
  );
};

export default BoardNavigator;
