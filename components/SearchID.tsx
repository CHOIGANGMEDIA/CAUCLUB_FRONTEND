/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Style from './Style/Style';
let imagePath = require('./images/푸앙_어푸앙.png');

//axios

const SearchID = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.welcomeTitle}>WELCOME</Text>
      <Text style={Style.appTitle}>CAUCLUB</Text>
      <View style={Style.imageContainer}>
        <Image style={Style.image} source={imagePath} />
        <Text
          style={[
            {
              color: 'black',
              fontSize: 15,
              fontWeight: '900',
              right: 10,
              fontStyle: 'italic',
            },
          ]}>
          다음부터는 아이디 까먹지 말랑!!
        </Text>
      </View>
      <Text style={Style.textStyle}>이메일</Text>
      <TextInput style={Style.boxStyle} placeholder={'이메일 입력'}></TextInput>
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
            인증번호 보내기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[{margin: 10}]} />
      <Text style={Style.textStyle}>인증번호</Text>
      <TextInput
        style={Style.boxStyle}
        placeholder={'인증번호 입력'}></TextInput>
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
            인증하기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Style.bottomCenter}>
        <Text>로그인</Text>
        <Text>|</Text>
        <Text>회원가입</Text>
        <Text>|</Text>
        <Text>비밀번호 찾기</Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchID;
