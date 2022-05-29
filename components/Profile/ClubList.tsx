/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight} from 'react-native';
import InitialStlye from '../Style/InitialStyle';
import ProfileStyle from '../Style/ProfileStyle';
import Profile from './Profile';
import BottomBox from '../BottomBox';

const ClubList = () => {
  return (
    <>
      <View style={InitialStlye.titleBox}>
        <Text style={InitialStlye.title}>CAUCLUB</Text>
      </View>
      <View style={ProfileStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>우리 학과 동아리</Text>
        <TouchableHighlight style={ProfileStyle.recommendClubView}>
            <Text style={({color: 'white', fontSize: 12, fontWeight: '900'})}>동아리 추천 받기</Text>
        </TouchableHighlight>
      </View>
      <View style={{width:'100%',borderBottomWidth:0.5,borderColor:'#444'}} />
      <KeyboardAwareScrollView>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </KeyboardAwareScrollView>
      <BottomBox />
    </>
  );
};

export default ClubList;