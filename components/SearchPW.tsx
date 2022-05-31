/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import {customAxios} from '../src/axiosModule/customAxios';
import Style from './Style/Style';
let imagePath = require('./images/푸앙_카우버거.png');
const SearchPW = () => {
  const [email, setEmail] = useState<string>();
  const [emailMsg, setEmailMsg] = useState<string>();
  const [sended, setSended] = useState<boolean>();
  const [cert, setCert] = useState<string>();

  const emailChanged = useCallback(
    (email: string) => {
      const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (email === undefined || email === '') {
        setEmailMsg(undefined);
      } else if (emailRegex.test(email)) {
        setEmailMsg(undefined);
        setEmail(email);
      } else {
        setEmailMsg('올바른 형식의 이메일을 입력해주세요 ex) example@exam.com');
        setEmail(undefined);
      }
    },
    [email],
  );

  const sendCertificate = () => {
    email
      ? customAxios
          .post(`/member/validIdEmail?email=${email}`)
          .then(request => {
            if (request.data) {
              Alert.alert('해당 이메일로 인증번호를 발송했습니다');
              setSended(true);
            } else Alert.alert('해당 이메일이 존재하지 않습니다');
          })
          .catch(error => {
            Alert.alert('서버 오류', '관리자에게 문의하세요');
            //console.log(error);
          })
      : Alert.alert('email을 확인해 주세요');
  };

  const certificate = () => {
    if (cert) {
      sended
        ? customAxios
            .post(`/member/validIdCertification?certification=${cert}`)
            .then(request => {
              request.data
                ? navigation.reset({routes: [{name: 'ResetPW'}]}) // TODO 비밀번호 재설정 하려는 id 넘겨주기
                : Alert.alert('인증번호가 일치하지 않습니다.');
            })
            .catch(error => {
              Alert.alert('서버 오류', '관리자에게 문의하세요');
              //console.log(error);
            })
        : Alert.alert(
            '인증번호 보내기를 통해 인증번호를 받으신 후 인증해 주세요',
          );
    } else Alert.alert('인증번호를 입력해 주세요');
  };

  const navigation = useNavigation<any>();

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
          다음부터는 비밀번호 까먹지 말랑!!
        </Text>
      </View>
      <Text style={Style.textStyle}>이메일</Text>
      {emailMsg ? <Text style={Style.warnSubStyle}>{emailMsg}</Text> : null}
      <TextInput
        style={Style.boxStyle}
        placeholder={'이메일 입력'}
        onChangeText={email => emailChanged(email)}></TextInput>
      <View style={Style.center}>
        <TouchableOpacity style={Style.buttonStyle} onPress={sendCertificate}>
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
        placeholder={'인증번호 입력'}
        onChangeText={text => setCert(text)}></TextInput>
      <View style={Style.center}>
        <TouchableOpacity style={Style.buttonStyle} onPress={certificate}>
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
        <Text
          onPress={() => navigation.reset({routes: [{name: 'LoginScreen'}]})}>
          로그인
        </Text>
        <Text>|</Text>
        <Text
          onPress={() =>
            navigation.reset({routes: [{name: 'RegisterScreen'}]})
          }>
          회원가입
        </Text>
        <Text>|</Text>
        <Text onPress={() => navigation.reset({routes: [{name: 'SearchID'}]})}>
          아이디 찾기
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchPW;
