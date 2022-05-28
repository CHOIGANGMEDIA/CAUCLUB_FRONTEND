/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import InitialStlye from './Style/InitialStyle';
import BoardStyle from './Style/BoardStyle';
import BottomBox from './BottomBox';

const BoardModify = () => {
  return (
    <>
      <View style={InitialStlye.titleBox}>
          <Text style={InitialStlye.title}>CAUCLUB</Text>
      </View>
      <View style={BoardStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>게시판</Text>
        <TouchableHighlight style={BoardStyle.newContent}>
            <Text style={({color: 'white', fontSize: 12, fontWeight: '900'})}>취소</Text>
        </TouchableHighlight>
      </View>
      <KeyboardAwareScrollView>
        <View style={({height: 551, alignItems: 'center'})}>
          <TextInput style={BoardStyle.inputTitle}>제목</TextInput>
          <TextInput style={BoardStyle.inputContent}>내용</TextInput>
          <View style={({flexDirection: 'row', justifyContent: 'space-between'})}>
            <TouchableHighlight style={BoardStyle.button1}>
              <Text style={({color: 'white', fontSize: 15, fontWeight: '900'})}>수정</Text>
            </TouchableHighlight>
            <TouchableHighlight style={BoardStyle.button2}>
              <Text style={({color: 'white', fontSize: 15, fontWeight: '900'})}>삭제</Text>
            </TouchableHighlight>
          </View>
        </View>
        
      </KeyboardAwareScrollView>
      <BottomBox />
    </>
  );
};

export default BoardModify;