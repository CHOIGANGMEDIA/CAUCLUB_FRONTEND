/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import InitialStlye from './Style/InitialStyle';

const BottomBox = () => {
  return (
    <View style={InitialStlye.bottomBox}>
      <Text style={{padding: 20}}>ranking</Text>
      <Text style={{padding: 20}}>archive</Text>
      <Text style={{padding: 20}}>board</Text>
      <Text style={{padding: 20}}>chat</Text>
      <Text style={{padding: 20}}>profile</Text>
    </View>
  );
};

export default BottomBox;
