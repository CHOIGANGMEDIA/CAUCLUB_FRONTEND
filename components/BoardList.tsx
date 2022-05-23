/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight} from 'react-native';
import InitialStlye from './Style/InitialStyle';
import BoardStyle from './Style/BoardStyle';

const BoardList = () => {
  return (
    <>
      <View style={InitialStlye.titleBox}>
          <Text style={InitialStlye.title}>CAUCLUB</Text>
      </View>
      <View style={BoardStyle.topBox}>
        <Text style={BoardStyle.boardTitle}>게시판</Text>
        <TouchableHighlight style={BoardStyle.newContent}>
            <Text style={({color: 'white', fontSize: 12, fontWeight: '900'})}>글쓰기</Text>
        </TouchableHighlight>
      </View>
      <View style={{width:'100%',borderBottomWidth:0.5,borderColor:'#444'}} />
      <KeyboardAwareScrollView>
        <TouchableHighlight style={BoardStyle.boardList}>
            <View style={({width: '100%'})}>
              <View style={({flexDirection: 'row', justifyContent: 'space-between'})}>

                <Text style={BoardStyle.clubName}>동아리명</Text>
              </View>
                <Text style={BoardStyle.title}>제목</Text>
                <Text style={BoardStyle.content}>내용이 두 줄이 된다면 내용이 두 줄이 된다면 내용이 두 줄이 된다면 내용이 두 줄이 된다면 내용이 두 줄이 된다면 내용이 두 줄이 된다면 </Text>
                <View style={{width:'95%',borderBottomWidth:0.5,borderColor:'#444',padding:4,marginLeft:10}} />
            </View>
        </TouchableHighlight>
        {/* 여기서부터 */}
        {/* 반복구간 */}
        <TouchableHighlight style={BoardStyle.boardList}>
            <View style={({width: '100%'})}>
              <View style={({flexDirection: 'row', justifyContent: 'space-between'})}>

                <Text style={BoardStyle.clubName}>ChAOS</Text>
              </View>
                <Text style={BoardStyle.title}>알고리즘 대회 공동 개최 동아리 모집</Text>
                <Text style={BoardStyle.content}>신입생을 대상으로 한 알고리즘 대회에 운영진, 출제진으로 함께 할 관련 학회 동아리를 모집합니다.</Text>
                <View style={{width:'95%',borderBottomWidth:0.5,borderColor:'#444',padding:4,marginLeft:10}} />
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={BoardStyle.boardList}>
            <View style={({width: '100%'})}>
              <View style={({flexDirection: 'row', justifyContent: 'space-between'})}>

                <Text style={BoardStyle.clubName}>퍼주마</Text>
              </View>
                <Text style={BoardStyle.title}>4/17 일 농구 한 판하고 퍼주마 갈 동아리 있나요</Text>
                <Text style={BoardStyle.content}>재밌는 분위기 보장합니다</Text>
                <View style={{width:'95%',borderBottomWidth:0.5,borderColor:'#444',padding:4,marginLeft:10}} />
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={BoardStyle.boardList}>
            <View style={({width: '100%'})}>
              <View style={({flexDirection: 'row', justifyContent: 'space-between'})}>

                <Text style={BoardStyle.clubName}>CLUG</Text>
              </View>
                <Text style={BoardStyle.title}>해커톤에 기획/디자인 파트로 참여할 동아리 모집</Text>
                <Text style={BoardStyle.content}>2023년 기획 중인 해커톤을 함께 운영하며 동아리 내의 기획자, 디자이너를 모집할 동아리를 찾습니다.</Text>
                <View style={{width:'95%',borderBottomWidth:0.5,borderColor:'#444',padding:4,marginLeft:10}} />
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={BoardStyle.boardList}>
            <View style={({width: '100%'})}>
              <View style={({flexDirection: 'row', justifyContent: 'space-between'})}>

                <Text style={BoardStyle.clubName}>CLUG</Text>
              </View>
                <Text style={BoardStyle.title}>해커톤에 기획/디자인 파트로 참여할 동아리 모집</Text>
                <Text style={BoardStyle.content}>2023년 기획 중인 해커톤을 함께 운영하며 동아리 내의 기획자, 디자이너를 모집할 동아리를 찾습니다.</Text>
                <View style={{width:'95%',borderBottomWidth:0.5,borderColor:'#444',padding:4,marginLeft:10}} />
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={BoardStyle.boardList}>
            <View style={({width: '100%'})}>
              <View style={({flexDirection: 'row', justifyContent: 'space-between'})}>

                <Text style={BoardStyle.clubName}>CLUG</Text>
              </View>
                <Text style={BoardStyle.title}>해커톤에 기획/디자인 파트로 참여할 동아리 모집</Text>
                <Text style={BoardStyle.content}>2023년 기획 중인 해커톤을 함께 운영하며 동아리 내의 기획자, 디자이너를 모집할 동아리를 찾습니다.</Text>
                <View style={{width:'95%',borderBottomWidth:0.5,borderColor:'#444',padding:4,marginLeft:10}} />
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={BoardStyle.boardList}>
            <View style={({width: '100%'})}>
              <View style={({flexDirection: 'row', justifyContent: 'space-between'})}>

                <Text style={BoardStyle.clubName}>CLUG</Text>
              </View>
                <Text style={BoardStyle.title}>해커톤에 기획/디자인 파트로 참여할 동아리 모집</Text>
                <Text style={BoardStyle.content}>2023년 기획 중인 해커톤을 함께 운영하며 동아리 내의 기획자, 디자이너를 모집할 동아리를 찾습니다.</Text>
                <View style={{width:'95%',borderBottomWidth:0.5,borderColor:'#444',padding:4,marginLeft:10}} />
            </View>
        </TouchableHighlight>
        {/* 여기까지 */}
        {/* 반복구간 */}
      </KeyboardAwareScrollView>
      <View style={InitialStlye.bottomBox}>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
        <Text style={({padding: 20})}>icon</Text>
      </View>
    </>
  );
};

export default BoardList;
