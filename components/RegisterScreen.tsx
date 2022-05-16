/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Image,
  Alert,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {customAxios} from '../src/axiosModule/customAxios';
import Style from './Style/Style';

let imagePath = require('./images/푸앙_응원.png');

const campus = ['서울캠퍼스', '안성캠퍼스'];
const college = [
  '인문대학',
  '공과대학',
  '생명공학대학',
  '의과대학',
  '사회과학대학',
  '소프트웨어대학',
  '자연과학대학',
  '창의ICT공과대학',
  '체육대학',
  '예술공학대학',
  '예술대학',
  '적십자간호대학',
  '약학대학',
  '경영경제대학',
  '사범대학',
];

type Validity = {
  id: boolean;
  password: boolean;
  name: boolean;
  email: boolean;
  campus: boolean;
  college: boolean;
};

const RegisterScreen = () => {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [selectedCampus, selectCampus] = useState<string>();
  const [selectedCollege, selectCollege] = useState<string>();
  const [idMsg, setIdMsg] = useState<string>();
  const [repassMsg, setRepassMsg] = useState<string>();
  const [emailMsg, setEmailMsg] = useState<string>();
  const [isValid, setValid] = useState<Validity>({
    id: false,
    password: false,
    name: false,
    email: false,
    campus: false,
    college: false,
  });

  const handleSubmit = () => {
    console.log(isValid);
    const {id, password, name, email, campus, college} = isValid;
    if (!id) Alert.alert('id를 입력해 주세요');
    else if (!password) Alert.alert('비밀번호를 확인해 주세요');
    else if (!name) Alert.alert('이름을 입력해 주세요');
    else if (!email) Alert.alert('email을 확인해 주세요');
    else if (!campus) Alert.alert('캠퍼스를 선택해 주세요');
    else if (!college) Alert.alert('대학을 선택해 주세요');
    else Alert.alert('회원가입이 완료되었습니다');
  };

  const idChanged = useCallback(
    (id: string) => {
      setId(id);
      customAxios.post(`/member/idDuplicateCheck?id=${id}`).then(response => {
        setIdMsg(
          response.data ? '사용 가능한 아이디입니다' : '중복된 아이디입니다',
        );
      });
      setValid({...isValid, id: !(id === undefined || id == '')});
    },
    [id],
  );

  const repasswordChanged = useCallback(
    (repassword: string) => {
      if (repassword === undefined || repassword === '') {
        setRepassMsg(undefined);
        setValid({...isValid, password: false});
      } else if (repassword !== password) {
        setRepassMsg('비밀번호가 일치하지 않습니다');
        setValid({...isValid, password: false});
      } else {
        setRepassMsg('비밀번호가 일치합니다');
        setValid({...isValid, password: true});
      }
    },
    [password],
  );

  const emailChanged = useCallback(
    (email: string) => {
      const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (email === undefined || email === '') {
        setEmailMsg(undefined);
        setValid({...isValid, email: true});
      } else if (emailRegex.test(email)) {
        setEmailMsg('');
        setValid({...isValid, email: true});
      } else {
        setEmailMsg('올바른 형식의 이메일을 입력해주세요 ex) example@exam.com');
        setValid({...isValid, email: false});
      }
    },
    [email],
  );

  const nameChanged = useCallback(
    (_name: string) => {
      setName(_name);
      setValid({...isValid, name: !(_name === undefined || _name == '')});
    },
    [name],
  );

  const campusSelected = useCallback(
    (selectedItem: string) => {
      console.log(selectedItem);
      selectCampus(selectedItem);
      setValid({...isValid, campus: true});
      isValid.campus = true;
    },
    [campus],
  );

  const collegeSelected = useCallback(
    (selectedItem: string) => {
      console.log(selectedItem);
      setValid({...isValid, college: true});
      selectCollege(selectedItem);
    },
    [college],
  );

  return (
    <View style={Style.container}>
      <ScrollView>
        <Text style={Style.welcomeTitle}>WELCOME</Text>
        <Text style={Style.appTitle}>CAUCLUB</Text>
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
        {idMsg ? <Text style={Style.warnSubStyle}>{idMsg}</Text> : null}
        <TextInput
          style={styles.boxStyle}
          placeholder={'아이디 입력'}
          onChangeText={(id: string) => {
            idChanged(id);
          }}
        />
        <Text style={styles.textStyle}>비밀번호</Text>
        <TextInput
          style={styles.boxStyle}
          placeholder={'비밀번호 입력'}
          secureTextEntry={true}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
        />
        <Text style={styles.textStyle}>{'비밀번호 재확인'}</Text>
        {repassMsg ? <Text style={Style.warnSubStyle}>{repassMsg}</Text> : null}
        <TextInput
          style={styles.boxStyle}
          placeholder={'비밀번호 재확인 입력'}
          secureTextEntry={true}
          onChangeText={(text: string) => {
            repasswordChanged(text);
          }}
        />
        <Text style={styles.textStyle}>이름</Text>
        <TextInput
          style={styles.boxStyle}
          placeholder={'이름 입력'}
          onChangeText={(text: string) => {
            nameChanged(text);
          }}
        />

        <Text style={styles.textStyle}>이메일</Text>
        {emailMsg ? <Text style={Style.warnSubStyle}>{emailMsg}</Text> : null}
        <TextInput
          style={styles.boxStyle}
          onChangeText={(email: string) => {
            emailChanged(email);
          }}
          placeholder={'이메일 입력'}
        />

        <Text style={styles.textStyle}>동아리 선택</Text>
        <View style={styles.selectBox}>
          <SelectDropdown
            data={campus}
            defaultButtonText={'캠퍼스를 선택하세요'}
            onSelect={selectedItem => {
              campusSelected(selectedItem);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
          />
          <SelectDropdown
            data={college}
            defaultButtonText={'대학을 선택하세요'}
            onSelect={selectedItem => {
              collegeSelected(selectedItem);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
          />
          {/*이 SelectDropdown은 서울캠퍼스일 때만 적용되는 경우*/}
        </View>
        {/* <TextInput style={styles.boxStyle} placeholder={'동아리 선택하는 곳'} /> */}
        {/* <SelectBox/> */}

        <View style={styles.center}>
          <Button
            color="#143365"
            title="   회원가입   "
            onPress={() => handleSubmit()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  checkBox: {
    margin: 10,
    left: 20,
    flexDirection: 'row',
  },
  selectBox: {
    margin: 10,
    left: 20,
    // alignItems: 'center',
    flexDirection: 'column',
  },
});

export default RegisterScreen;
