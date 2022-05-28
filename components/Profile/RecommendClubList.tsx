/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, Image} from 'react-native';
import InitialStlye from '../Style/InitialStyle';
import ProfileStyle from '../Style/ProfileStyle';
import RecommendProfile from './RecommendProfile';

let imagePath = require('../images/푸앙_기본형.png');

const RecommendClubList = () => {
  return (
    <>
      <View style={InitialStlye.titleBox}>
        <Text style={InitialStlye.title}>CAUCLUB</Text>
      </View>
      <View style={ProfileStyle.imageContainer}>
          <Image style={ProfileStyle.image} source={imagePath} />
          <Text  style={ProfileStyle.puang}> 동아리를 추천해볼까앙!!</Text>
        </View>
      <KeyboardAwareScrollView>
        <RecommendProfile />
        <RecommendProfile />
        <RecommendProfile />
        <RecommendProfile />
        <RecommendProfile />
      </KeyboardAwareScrollView>
      <View style={InitialStlye.bottomBox}>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
      </View>
    </>
  );
};

export default RecommendClubList;