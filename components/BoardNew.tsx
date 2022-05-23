/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import InitialStlye from './Style/InitialStyle';
import BoardStyle from './Style/BoardStyle';

const BoardNew = () => {
  return (
    <>
      <View style={InitialStlye.titleBox}>
        <Text style={InitialStlye.title}>CAUCLUB</Text>
      </View>
      <View style={BoardStyle.topBox}>
        <Text style={BoardStyle.boardTitle}>게시판</Text>
        <TouchableHighlight style={BoardStyle.newContent}>
          <Text style={({color: 'white', fontSize: 12, fontWeight: '900'})}>취소</Text>
        </TouchableHighlight>
      </View>
      <KeyboardAwareScrollView>
        <View style={({height: 551, alignItems: 'center'})}>
          <TextInput style={BoardStyle.inputTitle}>제목</TextInput>
          <TextInput style={BoardStyle.inputContent}>내용</TextInput>
          <TouchableHighlight style={BoardStyle.submmitButton}>
            <Text style={({color: 'white', fontSize: 17, fontWeight: '900'})}>작성 완료</Text>
          </TouchableHighlight>
        </View>
        <View style={InitialStlye.bottomBox}>
          <Text style={({padding: 20})}>icon</Text>
          <Text style={({padding: 20})}>icon</Text>
          <Text style={({padding: 20})}>icon</Text>
          <Text style={({padding: 20})}>icon</Text>
          <Text style={({padding: 20})}>icon</Text>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default BoardNew;