/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image, Button, TextInput, View, StyleSheet} from 'react-native';
// import Puang from '../images/푸앙_기본형.png';
let imagePath = require('./images/푸앙_기본형.png');

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
  },
  appTitle: {
    color: 'black',
    fontSize: 50,
    fontStyle: 'italic',
    marginBottom: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  boxStyle: {
    margin: 10,
    padding: 10,
    // marginBottom: 20,
    backgroundColor: 'white',
  },
  center: {
    margin: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>WELCOME</Text>
      <Text style={styles.appTitle}>CAUCLUB</Text>
      <Image style={styles.image} source={imagePath} />
      <TextInput style={styles.boxStyle} placeholder={'아이디'} />
      <TextInput
        style={styles.boxStyle}
        placeholder={'비밀번호'}
        secureTextEntry={true}
      />
      <View style={styles.center}>
        <Button color="#143365" title="   로그인   " />
      </View>
    </View>
  );
};

export default LoginScreen;
