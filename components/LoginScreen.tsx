/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image, TouchableOpacity, TextInput, View} from 'react-native';
import Style from './Style/Style';

let imagePath = require('./images/푸앙_기본형.png');

const LoginScreen = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.welcomeTitle}>WELCOME</Text>
      <Text style={Style.appTitle}>CAUCLUB</Text>
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
          로그인은 필수앙!!
        </Text>
      </View>
      <View style={[{margin: 10}]} />
      <Text style={Style.textStyle}> 아이디</Text>
      <TextInput
        style={Style.boxStyle}
        placeholder={'아이디를 입력하세요'}></TextInput>
      <Text style={Style.textStyle}> 비밀번호</Text>
      <TextInput
        style={Style.boxStyle}
        placeholder={'비밀번호를 입력하세요'}
        secureTextEntry={true}
      />
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
            로그인
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Style.bottomCenter}>
        <Text>아이디 찾기</Text>
        <Text>|</Text>
        <Text>비밀번호 찾기</Text>
        <Text>|</Text>
        <Text>회원가입</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

// 푸앙이 사진 잘리는 거 해결방법 알아보기
// 아이디 & 비밀번호 앞에 아이콘 넣기
