/* eslint-disable prettier/prettier */
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight} from 'react-native';
import InitialStlye from './Style/InitialStyle';
import BoardStyle from './Style/BoardStyle';
import {PostProps} from './BoardList';
import {useRoute} from '@react-navigation/native';

const BoardScreen = () => {
  const route = useRoute<any>();
  const {postId, clubName, title, contents} = route.params;
  return (
    <>
      <KeyboardAwareScrollView>
        <View style={InitialStlye.titleBox}>
          <Text style={InitialStlye.title}>CAUCLUB</Text>
        </View>
        <View style={BoardStyle.topBox}>
          <Text style={BoardStyle.boardTitle}>게시판</Text>
        </View>
        <View
          style={{width: '100%', borderBottomWidth: 0.5, borderColor: '#444'}}
        />
        <View>
          <View style={{height: 553, alignItems: 'center'}}>
            <Text style={BoardStyle.screenTitle}>{title}</Text>
            <View style={{flexDirection: 'row', width: '95%'}}>
              <Text style={BoardStyle.screenClub}>작성자: </Text>
              {/* 동아리명(ChAOS) 클릭하면 해당 동아리 프로필로 가게끔 하려고 버튼으로 만들었어요 */}
              <TouchableHighlight style={BoardStyle.screenClub}>
                <Text style={{color: 'black', fontWeight: '900'}}>
                  {clubName}
                </Text>
              </TouchableHighlight>
            </View>

            <Text style={BoardStyle.screenContent}>{contents}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={InitialStlye.bottomBox}>
        <Text style={{padding: 20}}>icon</Text>
        <Text style={{padding: 20}}>icon</Text>
        <Text style={{padding: 20}}>icon</Text>
        <Text style={{padding: 20}}>icon</Text>
        <Text style={{padding: 20}}>icon</Text>
      </View>
    </>
  );
};

export default BoardScreen;
