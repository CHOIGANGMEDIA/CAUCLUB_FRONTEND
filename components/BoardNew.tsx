/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight, TextInput, Alert} from 'react-native';
import InitialStlye from './Style/InitialStyle';
import BoardStyle from './Style/BoardStyle';
import {customAxios} from '../src/axiosModule/customAxios';

import BottomBox from './BottomBox';
const BoardNew = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const createPost = () => {
    if (title === '') Alert.alert('제목을 입력해 주세요');
    else if (body === '') Alert.alert('내용을 입력해 주세요');
    else {
      // TODO id param, clubid
      //customAxios.post(`/${memberId}/${clubId}/newPost?title=${title}&contents=${contents}`);
    }
  };

  return (
    <>
      <View style={InitialStlye.titleBox}>
        <Text style={InitialStlye.title}>CAUCLUB</Text>
      </View>
      <View style={BoardStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>게시판</Text>
        <TouchableHighlight style={BoardStyle.newContent}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: '900'}}>
            취소
          </Text>
        </TouchableHighlight>
      </View>
      <KeyboardAwareScrollView>
        <View style={{height: 551, alignItems: 'center'}}>
          <TextInput
            style={BoardStyle.inputTitle}
            onChangeText={text => setTitle(text)}
            placeholder={'제목을 입력해 주세요'}></TextInput>
          <TextInput
            style={BoardStyle.inputContent}
            onChangeText={text => setBody(text)}
            placeholder={'내용을 입력해 주세요'}></TextInput>
          <TouchableHighlight
            style={BoardStyle.submmitButton}
            onPress={createPost}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: '900'}}>
              작성 완료
            </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAwareScrollView>
      <BottomBox />
    </>
  );
};

export default BoardNew;
