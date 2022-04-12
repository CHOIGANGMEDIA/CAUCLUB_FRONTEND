/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from '@react-native-community/checkbox';
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
// const LiberalArts = []
// const Engineering =
// const Biotechnology =
// const Medical =
// const SocialSciences =
// const Software =
// const NaturalSciences =
// const ICT =
// const PhysicalEducation =
// const ArtsEngineering =
// const Arts =
// const Nursing =
// const Pharmacy =
// const BusinessEconomics =

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

const RegisterScreen = () => {
  //   function clickCheck(target) {
  //     document
  //       .querySelectorAll(`input[type=checkbox]`)
  //       .forEach(el => (el.checked = false));

  //     target.checked = true;
  //   }
  const [firstCheckBox, setFirstCheckBox] = useState(false);
  const [secondCheckBox, setSecondCheckBox] = useState(false);

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
        <Text style={styles.textStyle}>이름</Text>
        <TextInput style={styles.boxStyle} placeholder={'이름 입력'} />
        <Text style={styles.textStyle}>이메일</Text>
        <TextInput style={styles.boxStyle} placeholder={'이메일 입력'} />
        <Text style={styles.textStyle}>동아리장/동아리원 선택</Text>
        {/* <label for="1">동아리장</label>
        <input type="checkbox" id="1" onClick={clickCheck(this)} /> */}
        <View style={styles.checkBox}>
          <View style={styles.checkBox}>
            <Text style={[{color: 'black', fontWeight: '900', fontSize: 20}]}>
              동아리장
            </Text>
            <CheckBox
              disabled={false}
              value={firstCheckBox}
              onValueChange={newValue => setFirstCheckBox(newValue)}
            />
          </View>
          <View style={styles.checkBox}>
            <Text style={[{color: 'black', fontWeight: '900', fontSize: 20}]}>
              동아리원
            </Text>
            <CheckBox
              disabled={false}
              value={secondCheckBox}
              onValueChange={newValue => setSecondCheckBox(newValue)}
            />
          </View>
        </View>
        <Text style={styles.textStyle}>동아리 선택</Text>
        <View style={styles.selectBox}>
          <SelectDropdown
            data={campus}
            onSelect={selectedItem => {
              console.log(selectedItem);
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
            onSelect={selectedItem => {
              console.log(selectedItem);
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
          <Button color="#143365" title="   회원가입   " />
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
