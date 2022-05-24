import {customAxios} from '../src/axiosModule/customAxios';
import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Style from './Style/Style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

let imagePath = require('./images/푸앙_기본형.png');

const LoginScreen = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>();
  const login = () => {
    var data = JSON.stringify({
      id: id,
      password: password,
    });

    var config = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    customAxios
      .post('/member/login', data, config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
        if (response) {
          AsyncStorage.setItem('loggedId', id);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <KeyboardAwareScrollView style={Style.container}>
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
          placeholder={'아이디를 입력하세요'}
          autoCapitalize="none"
          onChangeText={(text: string) => {
            setId(id => text);
          }}></TextInput>
        <Text style={Style.textStyle}> 비밀번호</Text>
        <TextInput
          style={Style.boxStyle}
          placeholder={'비밀번호를 입력하세요'}
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(text: string) => {
            setPassword(password => text);
          }}
        />
        <View style={Style.center}>
          <TouchableOpacity style={Style.buttonStyle} onPress={login}>
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
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

// 푸앙이 사진 잘리는 거 해결방법 알아보기
// 아이디 & 비밀번호 앞에 아이콘 넣기
