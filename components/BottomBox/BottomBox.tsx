/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import InitialStlye from '../Style/InitialStyle';
import BottomButton from './BottomButton';

const BottomBox = () => {
  const buttonList = [];
  return (
    <View style={InitialStlye.bottomBox}>
      <BottomButton icon={'랭킹'} navigate={''} />
      <BottomButton icon={'아카이브'} navigate={''} />
      <BottomButton icon={'게시판'} navigate={''} />
      <BottomButton icon={'채팅'} navigate={''} />
      <BottomButton icon={'프로필'} navigate={''} />
    </View>
  );
};

export default BottomBox;
