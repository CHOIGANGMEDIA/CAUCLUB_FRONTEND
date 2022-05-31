/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './Style/Style';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from './navigation/SafeAreaView';

let imagePath = require('./images/푸앙_미소.png');

const ResetPW = () => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.imageContainer}>
        <Text
          style={{
            left: 1,
            color: 'black',
            fontSize: 15,
            fontWeight: '900',
            right: 20,
            fontStyle: 'italic',
          }}>
          {' '}
          비밀번호를 재설정해주세앙!{' '}
        </Text>
        <Image style={Style.image} source={imagePath} />
      </View>
      <View style={{margin: 10}} />
      <Text style={Style.textStyle}>비밀번호 확인</Text>
      <TextInput
        style={Style.boxStyle}
        placeholder={'기존 비밀번호를 입력해주세요'}></TextInput>
      <Text style={Style.textStyle}>비밀번호 재설정</Text>
      <TextInput
        style={Style.boxStyle}
        placeholder={'새 비밀번호를 입력해주세요'}></TextInput>
      <Text style={Style.textStyle}>비밀번호 재설정 확인</Text>
      <TextInput
        style={Style.boxStyle}
        placeholder={'새 비밀번호를 한 번 더 입력하세요'}></TextInput>
      <View style={{margin: 10}} />
      <View style={Style.center}>
        <TouchableOpacity style={Style.buttonStyle}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '900',
              fontSize: 15,
            }}>
            수정하기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPW;
