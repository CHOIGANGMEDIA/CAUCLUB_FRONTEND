/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Image,
} from 'react-native';

let imagePath = require('./images/푸앙_응원.png');

// const SelectBox = () => {
//   return (
//     <select>
//       <option key="1" value="1">
//         학술동아리
//       </option>
//       <option key="2" value="2">
//         예체능동아리
//       </option>
//       <option key="3" value="3">
//         기타동아리
//       </option>
//     </select>
//   );
// };

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
  boxStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#143365',
    borderRadius: 100,
  },
  textStyle: {
    color: 'black',
    fontSize: 15,
    fontWeight: '900',
    left: 20,
  },
  center: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: 500,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    height: 100,
    width: 100,
    margin: 10,
  },
  imageTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  clauseText: {
    color: '#5F5A5A',
    fontSize: 10,
    fontWeight: '900',
    left: 10,
    marginTop: 10,
  },
});

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcomeTitle}>WELCOME</Text>
        <Text style={styles.appTitle}>CAUCLUB</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imagePath}></Image>
          <View style={styles.imageTextContainer}>
            <Text style={styles.textStyle}>우리의 회원이 되어달랑!!</Text>
            <Text style={styles.clauseText}>
              *아이디와 비밀번호는 동아리용으로 생성해주세요.
            </Text>
            <Text style={styles.clauseText}>
              *마이페이지에서 동아리장의 권한을 넘길 수 있습니다.
            </Text>
          </View>
        </View>

        <Text style={styles.textStyle}>아이디</Text>
        <TextInput style={styles.boxStyle} placeholder={'아이디 입력'} />
        <Text style={styles.textStyle}>비밀번호</Text>
        <TextInput
          style={styles.boxStyle}
          placeholder={'비밀번호 입력'}
          secureTextEntry={true}
        />
        <Text style={styles.textStyle}>비밀번호 재확인</Text>
        <TextInput
          style={styles.boxStyle}
          placeholder={'비밀번호 재확인 입력'}
          secureTextEntry={true}
        />
        <Text style={styles.textStyle}>사용자 이름</Text>
        <TextInput style={styles.boxStyle} placeholder={'사용자 이름 입력'} />

        <Text style={styles.textStyle}>동아리 분류</Text>
        <TextInput style={styles.boxStyle} placeholder={'동아리 분류'} />
        <Text style={styles.textStyle}>소속 동아리명</Text>
        <TextInput style={styles.boxStyle} placeholder={'소속 동아리명 입력'} />
        {/* <SelectBox/> */}

        <View style={styles.center}>
          <Button color="#143365" title="   회원가입   " />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
