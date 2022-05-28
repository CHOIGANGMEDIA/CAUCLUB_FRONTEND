/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight} from 'react-native';
import InitialStlye from './Style/InitialStyle';
import BoardStyle from './Style/BoardStyle';
import BottomBox from './BottomBox';

const BoardScreen =() => {
  return (
    <>
      <View style={InitialStlye.titleBox}>
        <Text style={InitialStlye.title}>CAUCLUB</Text>
      </View>
      <View style={BoardStyle.topBox}>
        <Text style={InitialStlye.boardTitle}>게시판</Text>
      </View>
      <View style={{width:'100%',borderBottomWidth:0.5,borderColor:'#444'}} />
      <View>
        <View style={({height: 510, alignItems: 'center'})}>
          <Text style={BoardStyle.screenTitle}>알고리즘 대회 공동 개최 동아리 모집</Text>
          <View style={({flexDirection: 'row', width: '95%'})}>
            <Text style={BoardStyle.screenClub}>작성자: </Text>
            {/* 동아리명(ChAOS) 클릭하면 해당 동아리 프로필로 가게끔 하려고 버튼으로 만들었어요 */}
            <TouchableHighlight style={BoardStyle.screenClub}>
              <Text style={({color: 'black', fontWeight: '900'})}>
                ChAOS
              </Text>
            </TouchableHighlight>
          </View>
          <KeyboardAwareScrollView>
            <Text style={BoardStyle.screenContent}>내용 칸 입니다. 내용 길어지면 스크롤뷰로 알아서 잘 보입니다. 확인했어요~</Text>
          </KeyboardAwareScrollView>
        </View>
        <BottomBox />
      </View>
      
    </>
  );
};

export default BoardScreen;