/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Button, TextInput, View, StyleSheet} from 'react-native';
// import Puang from '../images/푸앙_기본형.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6BBEE2',
  },
  appTitle: {
    color: 'black',
    fontSize: 50,
    fontStyle: 'italic',
    marginTop: 100,
    marginBottom: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  boxStyle: {
    marginTop: 20,
    // marginBottom: 20,
    backgroundColor: 'white',
  },
});

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.appTitle} placeholder={'CAUCLUB'} />
      {/* <Image source={require('images/푸앙_기본형.png')} /> */}
      <TextInput style={styles.boxStyle} placeholder={'아이디'} />
      <TextInput style={styles.boxStyle} placeholder={'비밀번호'} />
      <Button title="로그인하기" />
    </View>
  );
};

export default LoginScreen;
