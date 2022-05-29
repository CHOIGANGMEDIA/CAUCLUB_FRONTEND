import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import InitialStlye from './Style/InitialStyle';

const TopBox = () => {
  return (
    <SafeAreaView style={InitialStlye.titleBox}>
      <Text style={InitialStlye.title}>CAUCLUB</Text>
    </SafeAreaView>
  );
};

export default TopBox;
