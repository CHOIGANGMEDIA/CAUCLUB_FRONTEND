/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect, useState} from 'react';
import Style from './Style/Style';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import {customAxios} from '../src/axiosModule/customAxios';

let imagePath = require('./images/푸앙_의복야구점퍼.png');

const MyPage = () => {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<Boolean>(true);
  const [emailMsg, setEmailMsg] = useState<string>();

  useEffect(() => {
    AsyncStorage.getItem('loggedId', (err, result) => {
      if (result) setId(result);
    });
    console.log(id);
    if (id) {
      customAxios
        .get(`/member/${id}`)
        .then(result => {
          setName(result.data.name.trim());
          setEmail(result.data.email);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  const emailChanged = useCallback(
    (email: string) => {
      const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (email === undefined || email === '') {
        setEmailMsg(undefined);
        setValidEmail(false);
      } else if (emailRegex.test(email)) {
        setValidEmail(true);
        setEmailMsg(undefined);
      } else {
        setEmailMsg('올바른 형식의 이메일을 입력해주세요 ex) example@exam.com');
        setValidEmail(false);
      }
      setEmail(email);
    },
    [email],
  );

  const modifyPressed = () => {
    if (validEmail) {
      customAxios
        .post(`/member/${id}?name=${name}&email=${email}`)
        .then(result => {
          if (result.data == true)
            Alert.alert('수정 성공', '회원 정보가 수정되었습니다');
        })
        .catch(error => {
          Alert.alert('오류 발생', error);
        });
    } else Alert.alert('실패', '이름과 이메일을 확인해 주세요');
  };

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
            뭐라할까{' '}
          </Text>
        </View>
        <View style={[{margin: 10}]} />
        <Text style={Style.textStyle}>비밀번호 재설정</Text>
        <TextInput
          style={Style.boxStyle}
          placeholder={'비밀번호를 유지하시려면 비워두세요'}></TextInput>
        <Text style={Style.textStyle}>비밀번호 재설정 확인</Text>
        <TextInput
          style={Style.boxStyle}
          placeholder={'비밀번호를 한 번 더 입력하세요'}></TextInput>
        <Text style={Style.textStyle}>이름</Text>
        <TextInput
          style={Style.boxStyle}
          onChangeText={text => setName(text)}
          value={name}></TextInput>
        <Text style={Style.textStyle}>이메일</Text>
        {emailMsg ? <Text style={Style.warnSubStyle}>{emailMsg}</Text> : null}
        <TextInput
          style={Style.boxStyle}
          onChangeText={text => emailChanged(text)}
          value={email}></TextInput>

        <View style={[{margin: 30}]} />
        <View style={Style.center}>
          <TouchableOpacity style={Style.buttonStyle} onPress={modifyPressed}>
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
        <View style={Style.lastCenter}>
          <TouchableOpacity>
            <Text style={({margin: 20})}>로그아웃</Text>
          </TouchableOpacity>
          <Text style={({margin: 20})}>|</Text>
          <TouchableOpacity>
            <Text style={({margin: 20})}>회원탈퇴</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MyPage;
