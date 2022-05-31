/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationHeader} from '../navigation/NavigationHeader';
import {SafeAreaView} from '../navigation/SafeAreaView';
import ArchievePage from './ArchievePage';

const ArchieveList = () => {
  // TODO api link
  // TODO Navigate
  return (
    <SafeAreaView>
      <NavigationHeader />
      <ScrollView style={{flex: 0}}>
        <ArchievePage />
        <ArchievePage />
        <ArchievePage />
        <ArchievePage />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArchieveList;
