/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Style from './Style/Style';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

let imagePath = require('./images/푸앙_의복야구점퍼.png');

const MyPage = () => {
  return (
    <KeyboardAwareScrollView style={Style.container}>
      <View style={[{marginTop: 10}]}>
        <Text style={Style.appTitle}>My Page</Text>
        <View style={Style.imageContainer}>
          <Image style={Style.image} source={imagePath} />
          <Text
            style={[
              {
                color: 'black',
                fontSize: 20,
                fontWeight: '900',
                right: 20,
                fontStyle: 'italic',
              },
            ]}>
            {' '}
            어떤 동아리인지 볼까앙?{' '}
          </Text>
        </View>
        <View style={[{margin: 10}]} />
        <Text style={Style.textStyle}>비밀번호 재설정</Text>
        <TextInput
          style={Style.boxStyle}
          placeholder={'비밀번호를 입력하세요'}></TextInput>
        <Text style={Style.textStyle}>비밀번호 재설정 확인</Text>
        <TextInput
          style={Style.boxStyle}
          placeholder={'비밀번호를 한 번 더 입력하세요'}></TextInput>
        <Text style={Style.textStyle}>동아리장</Text>
        <TextInput
          style={Style.boxStyle}
          placeholder={'동아리장의 이름을 입력하세요'}></TextInput>
        <Text style={Style.textStyle}>동아리장 이메일</Text>
        <TextInput
          style={Style.boxStyle}
          placeholder={'동아리장의 이메일을 입력하세요'}></TextInput>
        <Text style={Style.textStyle}>동아리명</Text>
        <TextInput
          style={Style.boxStyle}
          placeholder={'동아리명을 입력하세요'}></TextInput>
        <View style={[{margin: 30}]} />
        <View style={Style.center}>
          <TouchableOpacity style={Style.buttonStyle}>
            <Text
              style={[
                {
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: 15,
                },
              ]}>
              수정하기
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[{margin: 30}]} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MyPage;
