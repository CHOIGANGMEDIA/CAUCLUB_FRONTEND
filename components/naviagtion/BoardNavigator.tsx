import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BoardList from '../BoardList';
import BoardScreen from '../BoardScreen';

const Stack = createStackNavigator();

const BoardNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BoardList" component={BoardList} />
      <Stack.Screen name="BoardScreen" component={BoardScreen} />
    </Stack.Navigator>
  );
};

export default BoardNavigator;
