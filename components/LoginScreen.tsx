/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

let imagePath = require('./images/푸앙_기본형.png');

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>WELCOME</Text>
      <Text style={styles.appTitle}>CAUCLUB</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imagePath} />
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
      <Text style={styles.textStyle}> 아이디</Text>
      <TextInput style={styles.boxStyle} placeholder={'아이디를 입력하세요'}>
        <Text style={[{color: 'gray', marginLeft: 50}]}>
          아이디를 입력하세요
        </Text>
      </TextInput>
      <Text style={styles.textStyle}> 비밀번호</Text>
      <TextInput
        style={styles.boxStyle}
        placeholder={'비밀번호를 입력하세요'}
        secureTextEntry={true}
      />
      <View style={styles.center}>
        <TouchableOpacity style={styles.buttonStyle}>
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
      <View style={styles.center}>
        <Text>아이디 찾기</Text>
        <Text>|</Text>
        <Text>비밀번호 찾기</Text>
        <Text>|</Text>
        <Text>회원가입</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6BBEE2',
  },
  welcomeTitle: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 50,
  },
  appTitle: {
    color: 'black',
    fontSize: 50,
    fontStyle: 'italic',
    marginBottom: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 15,
    fontWeight: '900',
    left: 20,
  },
  boxStyle: {
    margin: 20,
    padding: 10,
    // marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#143365',
    borderRadius: 100,
  },
  center: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    height: 150,
    width: 150,
    margin: 10,
    right: 20,
  },
  buttonStyle: {
    borderWidth: 15,
    borderRadius: 100,
    borderColor: '#143365',
    backgroundColor: '#143365',
    width: 350,
  },
});

export default LoginScreen;

// 푸앙이 사진 잘리는 거 해결방법 알아보기
// 아이디 & 비밀번호 앞에 아이콘 넣기
